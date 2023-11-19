// start mega-game project

let roadMines = [true, true, true, true, true, true, true, true, true, true];

let damaged = false;

for (let i in roadMines) {
  console.log(`танк переместился на ${parseInt(i) + 1}`);
  if (roadMines[i] === true) {
    if (damaged === false) {
      damaged = true;
      console.log("танк повреждён");
    } else {
      console.log("танк уничтожен");
      break;
    }
  }
}