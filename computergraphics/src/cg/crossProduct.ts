function vecCrossProduct(vec1: number[], vec2: number[]): number[] {
    // Ensure both vectors have the same length and it's 3
    if (vec1.length !== 3 || vec2.length !== 3) {
        throw new Error("Vectors must have length 3");
    }

    const resultVector: number[] = [
        vec1[1] * vec2[2] - vec1[2] * vec2[1], // x component
        vec1[2] * vec2[0] - vec1[0] * vec2[2], // y component
        vec1[0] * vec2[1] - vec1[1] * vec2[0]  // z component
    ];

    return resultVector;
}

// Test the function
const vector1: number[] = [1, 2, 3];
const vector2: number[] = [4, 5, 6];
const crossProduct = vecCrossProduct(vector1, vector2);
console.log("Cross product:", crossProduct);

// Test with switched operands
const switchedCrossProduct = vecCrossProduct(vector2, vector1);
console.log("Cross product with switched operands:", switchedCrossProduct);
