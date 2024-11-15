function vecLength(vec: number[]): number {
   
    let sumOfSquares = 0;

    // Sum of squares of each component
    for (let i = 0; i < vec.length; i++) {
        sumOfSquares += vec[i] * vec[i];
    }

    // Return square root of the sum
    return Math.sqrt(sumOfSquares);
}

// Test the function
const vector: number[] = [3, 4, 0];
const length: number = vecLength(vector);
console.log("Length of the vector:", length);

