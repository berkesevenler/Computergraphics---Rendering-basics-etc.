// Initial vector
const initialVec: number[] = [1, 2, 0.3];

// Basis vectors
const iHat: number[] = [1, 0, 0];
const jHat: number[] = [0, 1, 0];
const kHat: number[] = [0, 0, 1];

// Create new vectors by multiplying initialVec components with basis vectors
const vecAlongIHat: number[] = [initialVec[0] * iHat[0], initialVec[1] * iHat[1], initialVec[2] * iHat[2]];
const vecAlongJHat: number[] = [initialVec[0] * jHat[0], initialVec[1] * jHat[1], initialVec[2] * jHat[2]];
const vecAlongKHat: number[] = [initialVec[0] * kHat[0], initialVec[1] * kHat[1], initialVec[2] * kHat[2]];

// Visualize the resulting vectors
console.log("Vector along iHat:", vecAlongIHat);
console.log("Vector along jHat:", vecAlongJHat);
console.log("Vector along kHat:", vecAlongKHat);

// Add the resulting vectors to get a new vector
const result: number[] = [
    vecAlongIHat[0] + vecAlongJHat[0] + vecAlongKHat[0],
    vecAlongIHat[1] + vecAlongJHat[1] + vecAlongKHat[1],
    vecAlongIHat[2] + vecAlongJHat[2] + vecAlongKHat[2]
];

// Visualize the result
console.log("Resultant vector:", result);

// Write basis vectors as a 3x3 matrix in row-major order
const basisMatrix: number[][] = [iHat, jHat, kHat];

// Create a function to multiply vector with matrix
function multVecMatrix(v: number[], m: number[][]): number[] {
    return [
        v[0] * m[0][0] + v[1] * m[0][1] + v[2] * m[0][2],
        v[0] * m[1][0] + v[1] * m[1][1] + v[2] * m[1][2],
        v[0] * m[2][0] + v[1] * m[2][1] + v[2] * m[2][2]
    ];
}

// Visualize the result of multiplying vector with matrix
console.log("Result of multiplying vector with matrix:", multVecMatrix(initialVec, basisMatrix));
