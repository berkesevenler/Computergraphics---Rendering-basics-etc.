// Function to convert degrees to radians
const degToRad = (degrees: number): number => degrees * Math.PI / 180;

// Function to generate a rotation matrix around the x-axis
const rotX = (angleDegrees: number): number[] => {
    const angleRad = degToRad(angleDegrees);
    const cosAngle = Math.cos(angleRad);
    const sinAngle = Math.sin(angleRad);
    return [
        1, 0, 0,
        0, cosAngle, -sinAngle,
        0, sinAngle, cosAngle
    ];
};

// Function to generate a rotation matrix around the y-axis
const rotY = (angleDegrees: number): number[] => {
    const angleRad = degToRad(angleDegrees);
    const cosAngle = Math.cos(angleRad);
    const sinAngle = Math.sin(angleRad);
    return [
        cosAngle, 0, sinAngle,
        0, 1, 0,
        -sinAngle, 0, cosAngle
    ];
};

// Function to generate a rotation matrix around the z-axis
const rotZ = (angleDegrees: number): number[] => {
    const angleRad = degToRad(angleDegrees);
    const cosAngle = Math.cos(angleRad);
    const sinAngle = Math.sin(angleRad);
    return [
        cosAngle, -sinAngle, 0,
        sinAngle, cosAngle, 0,
        0, 0, 1
    ];
};

// Test the functions
const angle = 45;
const matrixX = rotX(angle);
const matrixY = rotY(angle);
const matrixZ = rotZ(angle);

console.log("Rotation matrix around X-axis:");
console.log(matrixX);

console.log("Rotation matrix around Y-axis:");
console.log(matrixY);

console.log("Rotation matrix around Z-axis:");
console.log(matrixZ);
