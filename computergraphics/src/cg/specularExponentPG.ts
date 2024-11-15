import Playground from "./playground";

const pg = new Playground();

const n = [.23, .44, 0]
const i = [-1, -1, 1]

pg.gridXZ();
const specExp = 10
for (let i = Math.PI * -0.5; i <= Math.PI * 0.5; i += .03) {
    pg.visPoint([i, Math.cos(i), 0])
    pg.visPoint([i, Math.pow(Math.cos(i), specExp), 0], { color: "blue" })
}