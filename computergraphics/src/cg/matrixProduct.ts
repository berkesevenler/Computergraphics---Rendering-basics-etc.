function matrixProduct(matrix1: number[], matrix2: number[]): number[] {
    // Ensure both matrices are 3x3
    if (matrix1.length !== 9 || matrix2.length !== 9) {
        throw new Error("Matrices must be 3x3");
    }

    const resultMatrix: number[] = [];

    // Compute each element of the resulting matrix
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                sum += matrix1[i * 3 + k] * matrix2[k * 3 + j];
            }
            resultMatrix.push(sum);
        }
    }

    return resultMatrix;
}

// Test the function
const matrix1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const matrix2: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const productMatrix = matrixProduct(matrix1, matrix2);
console.log("Product Matrix:", productMatrix);
