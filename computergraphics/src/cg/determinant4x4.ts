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

    // Calculate the determinants of the 2x2 matrices
    const det1 = a * (e * i - f * h);
    const det2 = b * (d * i - f * g);
    const det3 = c * (d * h - e * g);

    // Sum up the products with appropriate signs
    const result = det1 - det2 + det3;

    return result;
}

// Function to calculate the determinant of a 4x4 matrix
function determinant4x4(matrix: number[][]): number {
    const a = matrix[0][0];
    const b = matrix[0][1];
    const c = matrix[0][2];
    const d = matrix[0][3];

    // Define submatrices
    const subMatrix1 = [
        [matrix[1][1], matrix[1][2], matrix[1][3]],
        [matrix[2][1], matrix[2][2], matrix[2][3]],
        [matrix[3][1], matrix[3][2], matrix[3][3]]
    ];
    const subMatrix2 = [
        [matrix[1][0], matrix[1][2], matrix[1][3]],
        [matrix[2][0], matrix[2][2], matrix[2][3]],
        [matrix[3][0], matrix[3][2], matrix[3][3]]
    ];
    const subMatrix3 = [
        [matrix[1][0], matrix[1][1], matrix[1][3]],
        [matrix[2][0], matrix[2][1], matrix[2][3]],
        [matrix[3][0], matrix[3][1], matrix[3][3]]
    ];
    const subMatrix4 = [
        [matrix[1][0], matrix[1][1], matrix[1][2]],
        [matrix[2][0], matrix[2][1], matrix[2][2]],
        [matrix[3][0], matrix[3][1], matrix[3][2]]
    ];

    // Calculate the determinant of each submatrix
    const det1 = determinant3x3(subMatrix1);
    const det2 = determinant3x3(subMatrix2);
    const det3 = determinant3x3(subMatrix3);
    const det4 = determinant3x3(subMatrix4);

    // Multiply each determinant by the corresponding element in the first row
    const result = a * det1 - b * det2 + c * det3 - d * det4;

    return result;
}

// Example usage
const matrix: number[][] = [
    [6, 2, 3, 4],
    [5, 1, 6, 7],
    [9, 3, 5, 2],
    [8, 4, 7, 1]
];

const determinant = determinant4x4(matrix);
console.log("Determinant:", determinant);
