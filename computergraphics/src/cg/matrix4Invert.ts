import { Vec3, Matrix3, Matrix4, matrix3ToMatrix4, matrix4Product, multVec3Matrix4, rotX, rotY, matrix4Invert, matrix4Transpose, vecSubtract, vecNormalize } from "./helper";
import Playground from "./playground";

const pg = new Playground();
pg.gridXZ();

// Triangle and normal
const tri: Array<Vec3> = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
];

const normals: Array<Vec3> = [
    [0, 1, 0]
];

// Transformations
const t1: Matrix4 = [ // with a 3x3 identity matrix
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
];

const r1 = rotX(0);
const r2 = rotY(0);

const s1: Matrix3 = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
];

// Combine transformations
const rotations = matrix4Product(matrix3ToMatrix4(r1), matrix3ToMatrix4(r2));
const scales = matrix3ToMatrix4(s1);
const transform = matrix4Product(matrix4Product(t1, rotations), scales);

// Transform vertices
const p0 = multVec3Matrix4(tri[0], transform);
const p1 = multVec3Matrix4(tri[1], transform);
const p2 = multVec3Matrix4(tri[2], transform);

// Calculate the inverse transpose matrix
const inverseTranspose = matrix4Transpose(matrix4Invert(transform));

// Transform normals
const nt = multVec3Matrix4(normals[0], inverseTranspose);

// Visualize transformed vertices
pg.visPoint(p0, { color: "dodgerblue", label: "0" });
pg.visPoint(p1, { color: "dodgerblue", label: "1" });
pg.visPoint(p2, { color: "dodgerblue", label: "2" });

// Visualize transformed normals
pg.visVector(vecNormalize(nt), { color: "blue", placeAt: p0 });
pg.visVector(vecNormalize(nt), { color: "blue", placeAt: p1 });
pg.visVector(vecNormalize(nt), { color: "blue", placeAt: p2 });

// Render the scene
pg.render();
