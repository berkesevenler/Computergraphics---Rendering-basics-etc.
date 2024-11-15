// Function to calculate the determinant of a 3x3 matrix
function determinant3x3(matrix: number[][]): number {
    const a = matrix[0][0];
    const b = matrix[0][1];
    const c = matrix[0][2];
    const d = matrix[1][0];
    const e = matrix[1][1];
    const f = matrix[1][2];
    const g = matrix[2][0];
    const h = matrix[2][1];
    const i = matrix[2][2];

    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

// Function to calculate the inverse of a 3x3 matrix
function matrix3Invert(matrix: number[][]): number[][] | null {
    // Calculate the determinant of the original matrix
    const det = determinant3x3(matrix);

    // If the determinant is 0, the matrix is not invertible
    if (det === 0) return null;

    // Create the matrix of minors
    const minors = [
        [
            determinant3x3([[matrix[1][1], matrix[1][2]], [matrix[2][1], matrix[2][2]]]),
            determinant3x3([[matrix[1][0], matrix[1][2]], [matrix[2][0], matrix[2][2]]]),
            determinant3x3([[matrix[1][0], matrix[1][1]], [matrix[2][0], matrix[2][1]]])
        ],
        [
            determinant3x3([[matrix[0][1], matrix[0][2]], [matrix[2][1], matrix[2][2]]]),
            determinant3x3([[matrix[0][0], matrix[0][2]], [matrix[2][0], matrix[2][2]]]),
            determinant3x3([[matrix[0][0], matrix[0][1]], [matrix[2][0], matrix[2][1]]])
        ],
        [
            determinant3x3([[matrix[0][1], matrix[0][2]], [matrix[1][1], matrix[1][2]]]),
            determinant3x3([[matrix[0][0], matrix[0][2]], [matrix[1][0], matrix[1][2]]]),
            determinant3x3([[matrix[0][0], matrix[0][1]], [matrix[1][0], matrix[1][1]]])
        ]
    ];

    // Create the matrix of cofactors
    const cofactors = minors.map((row, i) => row.map((minor, j) => (i + j) % 2 === 0 ? minor : -minor));

    // Transpose the matrix of cofactors to get the adjugate matrix
    const adjugate = cofactors[0].map((_, i) => cofactors.map(row => row[i]));

    // Divide each element of the adjugate matrix by the determinant of the original matrix
    const inverse = adjugate.map(row => row.map(element => element / det));

    return inverse;
}

// Function to calculate the determinant of a 4x4 matrix
function determinant4x4(matrix: number[][]): number {
    // Implementation of determinant4x4 function (as shown before)
}

// Function to calculate the inverse of a 4x4 matrix
function matrix4Invert(matrix: number[][]): number[][] | null {
    // Implementation of matrix4Invert function (using similar approach as matrix3Invert)
}

// Example usage
const matrix3: number[][] = [
    [2, -1, 0],
    [0, 1, -1],
    [1, 0, 2]
];

const inverseMatrix3 = matrix3Invert(matrix3);
console.log("Inverse of 3x3 matrix:", inverseMatrix3);

const matrix4: number[][] = [
    [2, -1, 0, 3],
    [0, 1, -1, 4],
    [1, 0, 2, -2],
    [-1, 3, 2, 1]
];

const inverseMatrix4 = matrix4Invert(matrix4);
console.log("Inverse of 4x4 matrix:", inverseMatrix4);
