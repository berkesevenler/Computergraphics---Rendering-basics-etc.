// Define the points of the cube
const pointsBeforeShear = [
    [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], // bottom points
    [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]  // top points
];

// Define the shear matrix
const shearMatrix = [
    1, 0.5, 0,
    0, 1, 0,
    0, 0, 1
];

// Apply shear transformation to the points
const pointsAfterShear = pointsBeforeShear.map(point => [
    point[0] + shearMatrix[1] * point[2], // x
    point[1], // y
    point[2] // z
]);

// Visualize the points before and after shear
console.log("Points before shear:");
console.table(pointsBeforeShear);
console.log("\nPoints after shear:");
console.table(pointsAfterShear);
