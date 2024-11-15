// Function to multiply a vector with a 3x3 matrix
function multVecMatrix(v: number[], m: number[]): number[] {
    if (v.length !== 3 || m.length !== 9) {
        throw new Error("Vector must be of length 3 and matrix must be 3x3");
    }

    return [
        v[0] * m[0] + v[1] * m[3] + v[2] * m[6],
        v[0] * m[1] + v[1] * m[4] + v[2] * m[7],
        v[0] * m[2] + v[1] * m[5] + v[2] * m[8]
    ];
}

// Define three arbitrary 3x3 matrices
const matrix1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const matrix2: number[] = [2, 0, 0, 0, 2, 0, 0, 0, 2];
const matrix3: number[] = [0, -1, 0, 1, 0, 0, 0, 0, 1];

// Define a vector
const vector: number[] = [1, 2, 3];

// Apply transformations one after another
const transformedVector1 = multVecMatrix(vector, matrix1);
const transformedVector2 = multVecMatrix(transformedVector1, matrix2);
const transformedVector3 = multVecMatrix(transformedVector2, matrix3);

console.log("Transformed vector after applying each matrix one after another:", transformedVector3);

// Combine all three matrices into one matrix
const combinedMatrix: number[] = [
    matrix1[0], matrix1[1], matrix1[2],
    matrix1[3], matrix1[4], matrix1[5],
    matrix1[6], matrix1[7], matrix1[8]
];

const matrix2StartIndex = 9;
const matrix3StartIndex = 18;

combinedMatrix.splice(matrix2StartIndex, 0, ...matrix2);
combinedMatrix.splice(matrix3StartIndex, 0, ...matrix3);

// Multiply the vector with the combined matrix
const result = multVecMatrix(vector, combinedMatrix);

console.log("Result using combined matrix:", result);
