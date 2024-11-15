// Define types for vectors and spheres
type Vec3 = [number, number, number];

interface ISphere {
    center: Vec3;
    radius: number;
}

// Function to perform vector dot product
function dotProduct(a: Vec3, b: Vec3): number {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

// Function to subtract two vectors
function vecSubtract(a: Vec3, b: Vec3): Vec3 {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

// Function to calculate the intersection of a ray and a sphere
export function raySphereIntersect(v: Vec3, o: Vec3, sphere: ISphere): [number, number] | null {
    const co = vecSubtract(o, sphere.center);

    const a = dotProduct(v, v);
    const b = 2 * dotProduct(v, co);
    const c = dotProduct(co, co) - sphere.radius * sphere.radius;

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        // No intersection
        return null;
    }

    const sqrtDiscriminant = Math.sqrt(discriminant);
    const t1 = (-b + sqrtDiscriminant) / (2 * a);
    const t2 = (-b - sqrtDiscriminant) / (2 * a);

    return [t1, t2];
}

// Example usage
const v: Vec3 = [0, 0, -1];
const o: Vec3 = [0, 0, 0];
const sphere: ISphere = {
    center: [0, 0, -5],
    radius: 1
};

const [t1, t2] = raySphereIntersect(v, o, sphere) || [null, null];
console.log(`t1: ${t1}, t2: ${t2}`);
