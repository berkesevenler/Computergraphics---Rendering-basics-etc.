// Function to calculate the determinant of a 2x2 matrix
function determinant2x2(matrix: number[][]): number {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

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
    const det1 = determinant2x2([[e, f], [h, i]]);
    const det2 = determinant2x2([[d, f], [g, i]]);
    const det3 = determinant2x2([[d, e], [g, h]]);

    // Multiply each determinant by the corresponding element in the first row
    const result = a * det1 - b * det2 + c * det3;

    return result;
}

// Example usage
const matrix: number[][] = [
    [2, -3, 1],
    [4, 2, -1],
    [5, 0, 3]
];

const determinant = determinant3x3(matrix);
console.log("Determinant:", determinant);
