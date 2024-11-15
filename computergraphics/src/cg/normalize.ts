function vecNormalize(vec: number[]): number[] {
    const length = vecLength(vec);

    // If length is 0, return the vector itself
    if (length === 0) return vec;

    // Compute the inverse of the length
    const inverseLength = 1 / length;

    // Normalize each component by multiplying with the inverse
    return vec.map(component => component * inverseLength);
}

// Test the function
const vector: number[] = [3, 4, 0];
const normalizedVector = vecNormalize(vector);
console.log("Normalized vector:", normalizedVector);
