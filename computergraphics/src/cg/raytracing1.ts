import Playground from "./playground";  // Importing the Playground module
const pg = new Playground();  // Creating an instance of Playground

// Define the sphere object with its position and radius
const sphere = {
    position: [0, .5, -3],  // Position of the sphere in the 3D space
    radius: 1.23  // Radius of the sphere
}

// Set up the camera and the grid for visualization
pg.visCamera(-1);  // Set the camera to a specific view angle
pg.gridXZ();  // Draw the XZ grid for reference

const o = [0, 0, 0];  // Origin of the rays (camera position)
const co = [o[0] - sphere.position[0], o[1] - sphere.position[1], o[2] - sphere.position[2]];  // Vector from the sphere center to the camera

const step = 1 / 8;  // Step size for looping over the image plane

// Loop over the image plane in the y direction
for (let yCoord = -1; yCoord <= 1; yCoord += step) {
    // Loop over the image plane in the x direction
    for (let xCoord = -1; xCoord <= 1; xCoord += step) {
        const v = [xCoord, yCoord, -1];  // Vector from the camera to the pixel
        const ov = [v[0] - o[0], v[1] - o[1], v[2] - o[2]];  // Vector from the camera to the pixel (same as v)

        pg.visVector(ov);  // Visualize the vector from the camera to the pixel

        // Coefficients for the quadratic equation
        const a = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];  // Dot product of v with itself
        const b = 2 * (v[0] * co[0] + v[1] * co[1] + v[2] * co[2]);  // 2 times the dot product of v and co
        const c = co[0] * co[0] + co[1] * co[1] + co[2] * co[2] - sphere.radius * sphere.radius;  // Dot product of co with itself minus the square of the sphere's radius

        const discriminant = b * b - 4 * a * c;  // Discriminant of the quadratic equation

        if (discriminant >= 0) {  // Check if the discriminant is non-negative
            const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);  // First solution to the quadratic equation
            const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);  // Second solution to the quadratic equation

            if (t1) {
                pg.visPoint(vecMultiplyScalar(t1, v), { color: "red" });  // Visualize the first intersection point
            }

            if (t2) {
                pg.visPoint(vecMultiplyScalar(t2, v), { color: "blue" });  // Visualize the second intersection point
            }
        }
    }
}

// Function to multiply a vector by a scalar
function vecMultiplyScalar(scalar: number, vector: number[]) {
    return [scalar * vector[0], scalar * vector[1], scalar * vector[2]];
}
