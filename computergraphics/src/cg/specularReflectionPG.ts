import { vecDotProduct, vecMultiplyScalar, vecNormalize, vecSubtract } from "./helper";
import Playground from "./playground";

const pg = new Playground();

// Define surface normal and incoming light direction
const n = [.23, .44, 0];
const i = [-1, -1, 1];

// Calculate reflection vector
const reflectionVector = vecSubtract(
    vecMultiplyScalar(vecNormalize(n), 2 * vecDotProduct(vecNormalize(n), vecNormalize(i))),
    vecNormalize(i)
);

// Visualize vectors
pg.gridXZ();
pg.visVector(n, { color: "dodgerblue", label: "N" });
pg.visVector(i, { color: "orangered", label: "Incoming Light" });
pg.visVector(reflectionVector, { color: "orange", label: "Reflected Light" });

// Render the scene
pg.render();
