function vecDotProduct(vec1: number[], vec2: number[]): number {
    // Ensure both vectors have the same length
    if (vec1.length !== vec2.length) {
        throw new Error("Vectors must have the same length");
    }

    let dotProduct = 0;

    // Multiply each component and sum the results
    for (let i = 0; i < vec1.length; i++) {
        dotProduct += vec1[i] * vec2[i];
    }

    return dotProduct;
}

// Test the function
const vector1: number[] = [1, 2, 3];
const vector2: number[] = [4, 5, 6];
const dotProduct = vecDotProduct(vector1, vector2);
console.log("Dot product:", dotProduct);
