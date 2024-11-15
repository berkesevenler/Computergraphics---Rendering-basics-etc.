//import { perspDivide } from "./_helper";
import Playground from "./playground";

const pg = new Playground();

const cameraPosition = [0, 0, 0]; // Camera position
const imagePlanePoint = [0.5, 0.6, -1]; // Point on the image plane
const travelDist = 5; // Distance to travel along the ray

// Creates a basic camera visualization
pg.visCamera(-1);

pg.visVector(cameraPosition, { color: "gray", label: "Camera", triangles: true });
pg.visVector(imagePlanePoint, { color: "orange", label: "Image Plane Point", triangles: true });

// Implement the ray equation
const ray = [(imagePlanePoint[0] - cameraPosition[0]) * travelDist + cameraPosition[0],
             (imagePlanePoint[1] - cameraPosition[1]) * travelDist + cameraPosition[1],
             (imagePlanePoint[2] - cameraPosition[2]) * travelDist + cameraPosition[2]];

pg.visVector(ray, { color: "blue", label: "Ray", triangles: true });
