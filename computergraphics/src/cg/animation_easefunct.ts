import { easeOutBounce } from "./helper";
import Framebuffer from "./framebuffer";

const width = 100
const height = 100
const framebuffer = new Framebuffer(width, height);
let currentFrame = 0

for (let i = 0; i <= 1; i += 0.02) {
    const c = height * easeOutBounce(i)
    framebuffer.draw(width * i, Math.floor(c), [255, 0, 0])
}

framebuffer.update();
framebuffer.save("frame." + ++currentFrame);