import { getImgLaunches, getImgRockets, getImgShips } from "./v3.js";

let launches= await getImgLaunches();
let rockets=await getImgRockets();
let ships=await getImgShips();

console.log(launches);
console.log(rockets);
console.log(ships);