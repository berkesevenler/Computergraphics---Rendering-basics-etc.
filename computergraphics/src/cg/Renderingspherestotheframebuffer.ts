import Framebuffer, { Color3 } from "./framebuffer";

const width = 600;
const height = 600;
const framebuffer = new Framebuffer(width, height);
const imagePlaneDist = -1;

const tNear = 1;
const tFar = 1000;

// Define spheres: center, radius, color
const spheres = [
    {
        center: { x: -2, y: 0, z: -3 },
        radius: 0.7,
        color: [255, 0, 0] as Color3 // Red
    },
    {
        center: { x: 0, y: 0, z: -3 },
        radius: 0.7,
        color: [0, 255, 0] as Color3 // Green
    },
    {
        center: { x: 2, y: 0, z: -3 },
        radius: 0.7,
        color: [0, 0, 255] as Color3 // Blue
    }
];

const o = { x: 0, y: 0, z: 0 }; // Camera/viewer origin

// Loop over framebuffer pixels
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

        // Convert raster to screen space (normalized device coordinates)
        const v = {
            x: (x + 0.5 - width / 2) / (width / 2),
            y: (y + 0.5 - height / 2) / (height / 2),
            z: imagePlaneDist
        };

        let closestSphere = null;
        let closestIntersection = 9999;

        // Ray-sphere intersection
        for (let i = 0; i < spheres.length; i++) {
            const { center, radius } = spheres[i];

            // Calculate intersections
            const oc = { x: o.x - center.x, y: o.y - center.y, z: o.z - center.z };
            const a = v.x * v.x + v.y * v.y + v.z * v.z;
            const b = 2 * (oc.x * v.x + oc.y * v.y + oc.z * v.z);
            const c = oc.x * oc.x + oc.y * oc.y + oc.z * oc.z - radius * radius;
            const discriminant = b * b - 4 * a * c;

            if (discriminant >= 0) {
                const t1 = (-b - Math.sqrt(discriminant)) / (2 * a);
                const t2 = (-b + Math.sqrt(discriminant)) / (2 * a);

                if (t1 < closestIntersection && tNear < t1 && t1 < tFar) {
                    closestIntersection = t1;
                    closestSphere = spheres[i];
                }

                if (t2 < closestIntersection && tNear < t2 && t2 < tFar) {
                    closestIntersection = t2;
                    closestSphere = spheres[i];
                }
            }
        }

        if (!closestSphere) {
            framebuffer.draw(x, y, [80, 80, 80]); // Draw background color
        } else {
            framebuffer.draw(x, y, closestSphere.color); // Draw color of closest sphere
        }

    }
}

framebuffer.update();
framebuffer.save("spheres");
