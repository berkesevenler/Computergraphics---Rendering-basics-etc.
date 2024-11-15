import Playground from "./playground";

const pg = new Playground();

// Some vectors
const v = [2,2,3]
const w = [1,2,3]

// Do some math
const sub = [v[0] - w[0], v[1] - w[1], v[2] - w[2]]


// Visualize
pg.gridXZ(); // Grid

pg.visVector(v,{color:"orange",label:"V"});
pg.visVector(w,{color:"dodgerblue",label:"W"});
pg.visVector(sub,{color:"green",placeAt:w});