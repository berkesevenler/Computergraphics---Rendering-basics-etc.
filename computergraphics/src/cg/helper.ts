import { vecSubtract } from "./utils";

/**
 * Transforms a 3D point to 2D screen coordinates using perspective division.
 * @param p - The 3D point represented as an array [x, y, z].
 * @param dist - The distance from the camera to the screen plane.
 * @returns The transformed 2D point with z set to the distance.
 */
export function perspDivide(p: Array<number>, dist: number) {
  let x = (dist * p[0]) / p[2];
  let y = (dist * p[1]) / p[2];
  let z = dist;
  return [x, y, z];
}

/**
 * Calculates the Euclidean length (magnitude) of a vector.
 * @param vector - The vector represented as an array of numbers.
 * @returns The length of the vector.
 */
export function vecLength(vector: Array<number>) {
  let sumOfSquares = 0;
  for (let i = 0; i < vector.length; i++) {
    sumOfSquares += vector[i] * vector[i];
  }
  console.log(Math.sqrt(sumOfSquares));
  return Math.sqrt(sumOfSquares);
}

/**
 * Normalizes a vector to have a unit length.
 * @param vector - The vector represented as an array of numbers.
 * @returns The normalized vector.
 */
export function vecNormalize(vector: Array<number>) {
  let computedLength = vecLength(vector);

  if (!computedLength) computedLength = 1;

  const inverseLength = 1 / computedLength;

  const normalizedVector = vector.map((component) => component * inverseLength);

  return normalizedVector;
}

/**
 * Calculates the dot product of two vectors.
 * @param vector1 - The first vector.
 * @param vector2 - The second vector.
 * @returns The dot product of the two vectors.
 * @throws If the vectors do not have the same length.
 */
export function vecDotProduct(vector1: Array<number>, vector2: Array<number>) {
  if (vector1.length !== vector2.length) {
    throw new Error("keine Gleiche Length");
  }
  let dotProduct = 0;
  for (let i = 0; i < vector1.length; i++) {
    dotProduct += vector1[i] * vector2[i];
  }

  return dotProduct;
}

/**
 * Calculates the angle in radians between two 2D vectors.
 * @param vector1 - The first 2D vector.
 * @param vector2 - The second 2D vector.
 * @returns The angle between the vectors in radians.
 */
export function angleBetweenVectors(
  vector1: { x: number; y: number },
  vector2: { x: number; y: number }
): number {
  const dotProduct = vector1.x * vector2.x + vector1.y * vector2.y;
  const magnitudeProduct =
    Math.sqrt(vector1.x ** 2 + vector1.y ** 2) *
    Math.sqrt(vector2.x ** 2 + vector2.y ** 2);

  if (magnitudeProduct === 0) {
    return NaN;
  }
  console.log(Math.acos(dotProduct / magnitudeProduct));
  return Math.acos(dotProduct / magnitudeProduct);
}

/**
 * Calculates the cross product of two 2D vectors.
 * @param vector1 - The first 2D vector.
 * @param vector2 - The second 2D vector.
 * @returns The cross product of the vectors.
 */
export function vecCrossProduct(
  vector1: { x: number; y: number },
  vector2: { x: number; y: number }
): number {
  return vector1.x * vector2.y - vector1.y * vector2.x;
}

/**
 * Multiplies two 3x3 matrices.
 * @param a - The first matrix as a 1D array of 9 elements.
 * @param b - The second matrix as a 1D array of 9 elements.
 * @returns The resulting matrix as a 1D array of 9 elements.
 * @throws If the input matrices do not have 9 elements.
 */
export function matrixProduct(a: number[], b: number[]): number[] {
  if (a.length !== 9 || b.length !== 9) {
    throw new Error("Error");
  }
  return [
    // Row 1
    a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
    a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
    a[0] * b[2] + a[1] * b[5] + a[2] * b[8],
    // Row 2
    a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
    a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
    a[3] * b[2] + a[4] * b[5] + a[5] * b[8],
    // Row 3
    a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
    a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
    a[6] * b[2] + a[7] * b[5] + a[8] * b[8],
  ];
}

/**
 * Multiplies a 3D vector by a 3x3 matrix.
 * @param vector - The 3D vector as an array of 3 elements.
 * @param matrix - The 3x3 matrix as a 1D array of 9 elements.
 * @returns The resulting 3D vector as an array of 3 elements.
 * @throws If the vector does not have 3 elements or the matrix does not have 9 elements.
 */
export function multVecMatrix(vector: number[], matrix: number[]): number[] {
  if (matrix.length !== 9 || vector.length !== 3) {
    throw new Error("Error");
  }

  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum += vector[j] * matrix[i * 3 + j];
    }
    result.push(sum);
  }
  return result;
}

/**
 * Generates a 3x3 rotation matrix for rotation around the X axis.
 * @param angleDegrees - The angle in degrees.
 * @returns The rotation matrix as a 1D array of 9 elements.
 */
export function rotX(angleDegrees: number): number[] {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const cosAngle = Math.cos(angleRadians);
  const sinAngle = Math.sin(angleRadians);
  return [
    1, 0, 0,
    0, cosAngle, sinAngle,
    0, -sinAngle, cosAngle];
}

/**
 * Generates a 3x3 rotation matrix for rotation around the Y axis.
 * @param angleDegrees - The angle in degrees.
 * @returns The rotation matrix as a 1D array of 9 elements.
 */
export function rotY(angleDegrees: number): number[] {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const cosAngle = Math.cos(angleRadians);
  const sinAngle = Math.sin(angleRadians);
  return [cosAngle, 0, -sinAngle, 0, 1, 0, sinAngle, 0, cosAngle];
}

/**
 * Generates a 3x3 rotation matrix for rotation around the Z axis.
 * @param angleDegrees - The angle in degrees.
 * @returns The rotation matrix as a 1D array of 9 elements.
 */
export function rotZ(angleDegrees: number): number[] {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const cosAngle = Math.cos(angleRadians);
  const sinAngle = Math.sin(angleRadians);
  return [cosAngle, sinAngle, 0, -sinAngle, cosAngle, 0, 0, 0, 1];
}

export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];

export type Matrix3 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type Matrix4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

/**
 * Multiplies a 3D vector by a 4x4 matrix.
 * @param v - The 3D vector as an array of 3 elements.
 * @param m - The 4x4 matrix as a 1D array of 16 elements.
 * @returns The resulting 3D vector as an array of 3 elements.
 */
export function multVec3Matrix4(v: Vec3, m: Matrix4): Vec3 {
  // Convert the 3D vector to a 4D vector by adding a homogeneous coordinate
  const v4: Vec4 = [v[0], v[1], v[2], 1];

  // Perform the matrix multiplication
  const resultVec4: Vec4 = [
    m[0] * v4[0] + m[4] * v4[1] + m[8] * v4[2] + m[12] * v4[3],
    m[1] * v4[0] + m[5] * v4[1] + m[9] * v4[2] + m[13] * v4[3],
    m[2] * v4[0] + m[6] * v4[1] + m[10] * v4[2] + m[14] * v4[3],
    m[3] * v4[0] + m[7] * v4[1] + m[11] * v4[2] + m[15] * v4[3],
  ];

  // Convert the resulting 4D vector back to a 3D vector by ignoring the homogeneous coordinate
  const resultVec3: Vec3 = [resultVec4[0], resultVec4[1], resultVec4[2]];

  return resultVec3;
}

/**
 * Multiplies two 4x4 matrices.
 * @param a - The first matrix as a 1D array of 16 elements.
 * @param b - The second matrix as a 1D array of 16 elements.
 * @returns The resulting matrix as a 1D array of 16 elements.
 */
export function matrix4Product(a: Matrix4, b: Matrix4): Matrix4 {

  return [
    a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12],
    a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13],
    a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14],
    a[0] * b[3] + a[1] * b[7] + a[2] * b[11]+ a[3] * b[15],

    a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12],
    a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13],
    a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14],
    a[4] * b[3] + a[5] * b[7] + a[6] * b[11]+ a[7] * b[15],
    
    a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12],
    a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13],
    a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14],
    a[8] * b[3] + a[9] * b[7] + a[10] * b[11]+ a[11] * b[15],

    a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12],
    a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13],
    a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14],
    a[12] * b[3] + a[13] * b[7] + a[14] * b[11]+ a[15] * b[15],

  ]
}


//[
//  0, 1, 2, 3,
//  4, 5, 6, 7,
//  8, 9, 10, 11,
//  12, 13, 14, 15
// ]


//[
//  0, 1, 2, 3,
//  4, 5, 6, 7,
//  8, 9, 10, 11,
//  12, 13, 14, 15
// ]

/**
 * Converts a 3x3 matrix to a 4x4 matrix by adding a homogeneous coordinate row and column.
 * @param m - The 3x3 matrix as a 1D array of 9 elements.
 * @returns The resulting 4x4 matrix as a 1D array of 16 elements.
 */
export function matrix3ToMatrix4(m: Matrix3): Matrix4 {
  return [
    m[0], m[1], m[2], 0,
    m[3], m[4], m[5], 0,
    m[6], m[7], m[8], 0,
    0, 0, 0, 1
  ];
}

/**
 * Multiplies a vector by a scalar.
 * @param vector - The vector as an array of numbers.
 * @param scalar - The scalar value to multiply.
 * @returns The resulting vector after multiplication.
 */
export function vecMultiplyScalar(vector: number[], scalar: number): number[] {
  return vector.map((element) => element * scalar);
}

/**
 * Adds two vectors element-wise.
 * @param v1 - The first vector.
 * @param v2 - The second vector.
 * @returns The resulting vector after addition.
 * @throws If the vectors do not have the same length.
 */
export function vecAdd(v1: number[], v2: number[]): number[] {
  if (v1.length !== v2.length) {
    throw new Error("Die Lange der Vektor müssten gleich sein!!!");
  }

  let result: number[] = [];
  for (let i = 0; i < v1.length; i++) {
    result.push(v1[i] + v2[i]);
  }

  return result;
}

/**
 * Subtracts the second vector from the first vector element-wise.
 * @param v1 - The first vector.
 * @param v2 - The second vector.
 * @returns The resulting vector after subtraction.
 * @throws If the vectors do not have the same length.
 */
export function vecSub(v1: number[], v2: number[]): number[] {
  if (v1.length !== v2.length) {
    throw new Error("Die Lange der Vektor müssten gleich sein!!!");
  }

  let result: number[] = [];
  for (let i = 0; i < v1.length; i++) {
    result.push(v1[i] - v2[i]);
  }

  return result;
}

class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString(): string {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`;
  }
}

/**
 * Converts raster coordinates to screen coordinates.
 * @param rasterX - The x-coordinate in raster space.
 * @param rasterY - The y-coordinate in raster space.
 * @param width - The width of the screen.
 * @param height - The height of the screen.
 * @param imagePlaneDist - The distance to the image plane.
 * @returns The screen coordinates as a 3D vector.
 */
export function rasterToScreen(
  rasterX: number,
  rasterY: number,
  width: number,
  height: number,
  imagePlaneDist: number
): Vec3 {
  const ndcX = (rasterX + 0.5) / width;
  const ndcY = (rasterY + 0.5) / height;

  const screenX = 2 * ndcX - 1;
  const screenY = 1 - 2 * ndcY;

  return [screenX, screenY, imagePlaneDist];
}

/**
 * Calculates the ease-out bounce effect for a given input.
 * @param x - The input value between 0 and 1.
 * @returns The output value after applying the ease-out bounce effect.
 */
export function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

/**
 * Calculates the ease-in-out bounce effect for a given input.
 * @param x - The input value between 0 and 1.
 * @returns The output value after applying the ease-in-out bounce effect.
 */
export function easeInOutBounce(x: number): number {
  return x < 0.5
    ? (1 - easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce(2 * x - 1)) / 2;
}

export interface ISphere {
  center: Vec3;
  radius: number;
  color: Vec3;
}

/**
 * Calculates the intersection points of a ray with a sphere.
 * @param v - The direction vector of the ray.
 * @param o - The origin point of the ray.
 * @param sphere - The sphere to intersect with.
 * @returns The intersection points as a tuple [t1, t2]. If there are no intersections, returns [-1, -1].
 */
export function raySphereIntersect(
  v: Vec3,
  o: Vec3,
  sphere: ISphere
): [number, number] {
  const ov = vecSubtract(v,o);
  const co = vecSub(o, sphere.center);

  const a = vecDotProduct(ov, ov);
  const b = 2 * vecDotProduct(co, ov);
  const c = vecDotProduct(co, co) - Math.pow(sphere.radius, 2);

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [-1, -1];
  }

  const t1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const t2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [t1, t2];
}
