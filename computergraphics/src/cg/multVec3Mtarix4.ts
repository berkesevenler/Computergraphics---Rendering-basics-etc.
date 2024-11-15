export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];

export type Matrix3 = [
    number, number, number,
    number, number, number,
    number, number, number
];

export type Matrix4 = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
];

export function multVec3Matrix4(v: Vec3, m: Matrix4): Vec3 {
    // Convert Vec3 to Vec4 (homogeneous point)
    const v4: Vec4 = [...v, 1];

    // Perform vector-matrix multiplication
    const result: Vec4 = [
        v4[0] * m[0] + v4[1] * m[1] + v4[2] * m[2] + v4[3] * m[3],
        v4[0] * m[4] + v4[1] * m[5] + v4[2] * m[6] + v4[3] * m[7],
        v4[0] * m[8] + v4[1] * m[9] + v4[2] * m[10] + v4[3] * m[11]
    ];

    // Return the result as Vec3
    return [result[0], result[1], result[2]];
}

// Test the function
const vector: Vec3 = [1, 2, 3];
const matrix: Matrix4 = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
];
const result = multVec3Matrix4(vector, matrix);
console.log("Result of vector-matrix multiplication:", result);
