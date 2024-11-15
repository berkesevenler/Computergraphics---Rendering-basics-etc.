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

function rasterToScreenSpace(rasterX: number, rasterY: number, width: number, height: number): Vector3 {
    // Raster to NDC
    const ndcX = (rasterX + 0.5) / width;
    const ndcY = (rasterY + 0.5) / height;

    // NDC to Screen Space
    const screenX = 2 * ndcX - 1;
    const screenY = 1 - 2 * ndcY;

    return new Vector3(screenX, screenY);
}

// Example usage:
const rasterX = 50;
const rasterY = 100;  // example raster coordinates
const width = 1920;
const height = 1080;  // example screen dimensions

const screenSpaceVector = rasterToScreenSpace(rasterX, rasterY, width, height);
console.log(screenSpaceVector.toString());
