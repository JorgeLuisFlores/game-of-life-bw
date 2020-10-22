import { ALIVE, WORLD_SIZE_3D, createWorld } from "./game3D.jsx";

export const presetOptions = [
  { key: "box", value: "box", text: "Box" },
  { key: "plane", value: "plane", text: "Plane" },
  { key: "plus", value: "plus", text: "Plus" },
];

export const loadPreset = (preset) => {
  let newWorld = createWorld();
  const half = Math.floor(WORLD_SIZE_3D / 2);
  switch (preset.toLowerCase()) {
    case "box":
      return box(newWorld, half);
    case "plane":
      return plane(newWorld, half);
    case "glider":
      return glider(newWorld, half);
    case "cross":
      return cross(newWorld, half);
    case "thickCross":
      return thickCross(newWorld, half);
    case "plus":
      return plus(newWorld, half);
    default:
      return newWorld;
  }
};

const toBlock = (world, x0, y0) => {
  world[y0][x0] = ALIVE;
  world[y0 - 1][x0] = ALIVE;
  world[y0][x0 + 1] = ALIVE;
  world[y0 - 1][x0 + 1] = ALIVE;
  return world;
};

const toEgg = (world, y0, x0) => {
  world[x0][y0] = ALIVE;
  world[x0][y0 + 6] = ALIVE;
  world[x0][y0 + 4] = ALIVE;
  world[x0][y0 + 7] = ALIVE;
  for (let i = 0; i < 3; i++) {
    world[x0 + 1 + i][y0 + i] = ALIVE;
    world[x0 - 1 - i][y0 + i] = ALIVE;
  }
  world[x0 + 3][y0 + 3] = ALIVE;
  world[x0 + 2][y0 + 5] = ALIVE;
  world[x0 + 1][y0 + 6] = ALIVE;
  world[x0 - 3][y0 + 3] = ALIVE;
  world[x0 - 2][y0 + 5] = ALIVE;
  world[x0 - 1][y0 + 6] = ALIVE;

  return world;
};

const ship1 = (world, y0, x0) => {
  world[x0][y0] = ALIVE;
  world[x0][y0 + 1] = ALIVE;
  world[x0 - 1][y0] = ALIVE;
  world[x0 - 1][y0 + 1] = ALIVE;
  world[x0 - 2][y0 + 2] = ALIVE;
  world[x0 - 2][y0 + 4] = ALIVE;
  world[x0 - 3][y0 + 4] = ALIVE;
  world[x0 + 1][y0] = ALIVE;
  world[x0 + 1][y0 + 1] = ALIVE;
  world[x0 + 1][y0 + 1] = ALIVE;
  world[x0 + 2][y0 + 2] = ALIVE;
  world[x0 + 2][y0 + 4] = ALIVE;
  world[x0 + 3][y0 + 4] = ALIVE;
  return world;
};

const toMirror = (world, i, x, y, axis) => {
  world[i + x][i + y] = ALIVE;
  if (axis === "x") {
    world[i - x][i + y] = ALIVE;
  } else if (axis === "y") {
    world[i + x][i - y] = ALIVE;
  } else if (axis === "dia") {
    world[i + y][i + x] = ALIVE;
  } else if (axis === "quad") {
    world[i + x][i + y] = ALIVE;
    world[i - x][i + y] = ALIVE;
    world[i + x][i - y] = ALIVE;
    world[i - x][i - y] = ALIVE;
  }
  return world;
};

const box = (world, half) => {
  const start = Math.ceil(half / 2);
  const boxSize = half + start;
  for (let i = start; i < boxSize; i++) {
    for (let j = start; j < boxSize; j++) {
      for (let k = start; k < boxSize; k++) {
        world[i][j][k] = ALIVE;
      }
    }
  }
  return world;
};

const plane = (world, half) => {
  world[half].map((row, j) => {
    return world[half][j].fill(ALIVE);
  });
  return world;
};

const plus = (world, half) => {
  for (let i = 0; i < WORLD_SIZE_3D; i++) {
    world[i][half][half] = ALIVE;
    world[half][i][half] = ALIVE;
    world[half][half][i] = ALIVE;
  }
  return world;
};

const cross = (world, half) => {
  const n = world.length - 1;
  for (let i = 0; i < n / 2; i++) {
    world = toMirror(world, half, i, i, "quad");
  }
  return world;
};

const thickCross = (world, half) => {
  const n = world.length - 8;
  for (let i = 0; i < n / 2; i++) {
    world = toMirror(world, half, i, i, "quad");
    world = toMirror(world, half, i, i - 1, "quad");
    world = toMirror(world, half, i, i - 2, "quad");
    world = toMirror(world, half, i, i + 1, "quad");
    world = toMirror(world, half, i, i + 2, "quad");
  }
  return world;
};

const glider = (world, startX, startY) => {
  const half = Math.floor(WORLD_SIZE_3D / 2);
  const x = half;
  const y = half;
  world[x][y] = ALIVE;
  world[x][y + 1] = ALIVE;
  world[x][y + 2] = ALIVE;
  world[x - 1][y] = ALIVE;
  world[x - 2][y + 1] = ALIVE;
  return world;
};