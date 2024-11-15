// utils.ts

// Function for scalar multiplication (vector scaling)
export function vecMultiplyScalar(scalar: number, vector: number[]): number[] {
    return vector.map(component => component * scalar);
}

// Function for vector addition
export function vecAdd(vector1: number[], vector2: number[]): number[] {
    if (vector1.length !== vector2.length) {
        throw new Error("Vectors must have the same length for addition.");
    }
    return vector1.map((component, index) => component + vector2[index]);
}

// Function for vector subtraction
export function vecSubtract(vector1: number[], vector2: number[]): number[] {
    if (vector1.length !== vector2.length) {
        throw new Error("Vectors must have the same length for subtraction.");
    }
    return vector1.map((component, index) => component - vector2[index]);
}
