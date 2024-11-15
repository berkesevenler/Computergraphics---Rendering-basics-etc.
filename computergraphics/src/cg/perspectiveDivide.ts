import { perspDivide } from "./helper";
import Playground from "./playground";

const pg = new Playground();

const point = [0.5, 0.6, -3];
const distImagePlane = -1;

// Creates a basic camera visualization
pg.visCamera(distImagePlane);

pg.visVector(point, { color: "orange", label: "P", triangles: true });

// Define the perspective division function
function perspDivide(p, dist) {
    return [p[0] / (p[2] - dist), p[1] / (p[2] - dist), 1];
}

let pProjected = perspDivide(point, distImagePlane);
pg.visVector(pProjected, { color: "blue", label: "P'", triangles: true });

// Move the point further away from the camera and project it
const newPoint = [0.5, 0.6, -5];
let pNewProjected = perspDivide(newPoint, distImagePlane);
pg.visVector(newPoint, { color: "green", label: "New P", triangles: true });
pg.visVector(pNewProjected, { color: "red", label: "New P'", triangles: true });
