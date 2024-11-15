export type Matrix4 = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
];

export function matrix4Product(a: Matrix4, b: Matrix4): Matrix4 {
    const result: Matrix4 = [
        // Row 1
        a[0]*b[0] + a[1]*b[4] + a[2]*b[8] + a[3]*b[12],
        a[0]*b[1] + a[1]*b[5] + a[2]*b[9] + a[3]*b[13],
        a[0]*b[2] + a[1]*b[6] + a[2]*b[10] + a[3]*b[14],
        a[0]*b[3] + a[1]*b[7] + a[2]*b[11] + a[3]*b[15],

        // Row 2
        a[4]*b[0] + a[5]*b[4] + a[6]*b[8] + a[7]*b[12],
        a[4]*b[1] + a[5]*b[5] + a[6]*b[9] + a[7]*b[13],
        a[4]*b[2] + a[5]*b[6] + a[6]*b[10] + a[7]*b[14],
        a[4]*b[3] + a[5]*b[7] + a[6]*b[11] + a[7]*b[15],

        // Row 3
        a[8]*b[0] + a[9]*b[4] + a[10]*b[8] + a[11]*b[12],
        a[8]*b[1] + a[9]*b[5] + a[10]*b[9] + a[11]*b[13],
        a[8]*b[2] + a[9]*b[6] + a[10]*b[10] + a[11]*b[14],
        a[8]*b[3] + a[9]*b[7] + a[10]*b[11] + a[11]*b[15],

        // Row 4
        a[12]*b[0] + a[13]*b[4] + a[14]*b[8] + a[15]*b[12],
        a[12]*b[1] + a[13]*b[5] + a[14]*b[9] + a[15]*b[13],
        a[12]*b[2] + a[13]*b[6] + a[14]*b[10] + a[15]*b[14],
        a[12]*b[3] + a[13]*b[7] + a[14]*b[11] + a[15]*b[15]
    ];

    return result;
}

// Test the function
const matrix1: Matrix4 = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
];
const matrix2: Matrix4 = [
    16, 15, 14, 13,
    12, 11, 10, 9,
    8, 7, 6, 5,
    4, 3, 2, 1
];
const productMatrix = matrix4Product(matrix1, matrix2);
console.log("Product Matrix:", productMatrix);
