 // Import the Framebuffer class and the Color3 type from the framebuffer module.
import Framebuffer, { Color3 } from "./framebuffer";
import { raySphereIntersect, rasterToScreen, ISphere } from "./helper"; // Import utility functions and types from the _helper module.
import { Vec3, Matrix3, Matrix4, rotX, rotY, multVec3Matrix4, matrix4Product, matrix3ToMatrix4, } from "./helper"; // Import vector and matrix operations, and transformation functions from the _helper module.

const width = 600; // Define the width of the framebuffer.
const height = 600; // Define the height of the framebuffer.
const framebuffer = new Framebuffer(width, height); // Create a new Framebuffer object with the specified width and height.
const imagePlaneDist = -1; // Distance from the camera to the image plane.

const tNear = 1; // Near clipping plane distance.
const tFar = 1000; // Far clipping plane distance.


const spheres = [ // Array of sphere objects to be rendered.
  {
    center: [-2.5, 0, 0], // Sphere center position.
    radius: 1, // Sphere radius.
    color: [128, 0, 0] // Sphere color (red).
  },
  {
    center: [0, 0, 0], // Sphere center position.
    radius: 1, // Sphere radius.
    color: [0, 128, 0] // Sphere color (green).
  },
  {
    center: [2.5, 0, 0], // Sphere center position.
    radius: 1, // Sphere radius.
    color: [0, 0, 128] // Sphere color (blue).
  }
];


const o: Vec3 = [0, 0, 0]; // Camera origin.

const camT: Matrix4 = [ // Initial camera translation matrix.
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 6, 1
];

const camRx: Matrix4 = matrix3ToMatrix4(rotX(-25) as Matrix3); // Rotate the camera around the X-axis by -25 degrees.

const camInitialTransform: Matrix4 = matrix4Product(camT, camRx); // Combine translation and rotation into the initial camera transformation matrix.

let currentFrame = 0; // Initialize the current frame counter.

for (let i = 0; i <= 1; i += 0.1) { // Loop to create frames for the animation, with rotation from 0 to 360 degrees.
  framebuffer.clear(); // Clear the framebuffer.

  const camRot: Matrix4 = matrix3ToMatrix4(rotY(360*i) as Matrix3); // Rotate the camera around the Y-axis by 360*i degrees.

  const combinedCameraTransform: Matrix4 = matrix4Product(camInitialTransform, camRot); // Combine the initial transform with the rotation for the current frame.

  for (let x = 0; x < width; x++) { // Loop over each pixel in the framebuffer.
    for (let y = 0; y < height; y++) {

      const v = rasterToScreen(x, y, width, height, imagePlaneDist); // Convert raster coordinates to screen space.

      const vTransformed: Vec3 = multVec3Matrix4(v, combinedCameraTransform); // Transform the screen space vector by the combined camera transformation.

      const oTransformed: Vec3 = multVec3Matrix4(o, combinedCameraTransform); // Transform the camera origin by the combined camera transformation.

      let closestSphere = null; // Initialize the closest sphere as null.
      let closestIntersection = 9999; // Initialize the closest intersection distance to a large number.

      for (let i = 0; i < spheres.length; i++) { // Loop through each sphere.
        const sphere = spheres[i]; // Get the current sphere.

        const [t1, t2] = raySphereIntersect(vTransformed, oTransformed, sphere as ISphere); // Calculate the intersection distances of the ray with the sphere.

        if (t1 < closestIntersection && tNear < t1 && t1 < tFar) { // Check if the first intersection is the closest and within the clipping planes.
          closestIntersection = t1; // Update the closest intersection distance.
          closestSphere = sphere; // Update the closest sphere.
        }

        if (t2 < closestIntersection && tNear < t2 && t2 < tFar) { // Check if the second intersection is the closest and within the clipping planes.
          closestIntersection = t2; // Update the closest intersection distance.
          closestSphere = sphere; // Update the closest sphere.
        }
      }
      //console.log(closestSphere)

      if (!closestSphere) { // If no sphere is intersected by the ray.
        framebuffer.draw(x, y, [255, 255, 255]); // Draw a white pixel.
      } else { // If a sphere is intersected.
        framebuffer.draw(x, y, closestSphere.color as Color3); // Draw the pixel with the color of the closest sphere.
      }
    }
  }

  framebuffer.update(); // Update the framebuffer.
  framebuffer.save("spheres." + ++currentFrame); // Save the current frame with an incremented frame number.
}
