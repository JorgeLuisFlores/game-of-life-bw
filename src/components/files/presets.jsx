import { ALIVE, WORLD_SIZE, createWorld } from "./game";

export const presetOptions = [
  { key: "line", value: "line", text: "Line" },
  { key: "cross", value: "cross", text: "Cross" },
  { key: "thickCross", value: "thickCross", text: "Thick Cross" },
  { key: "plus", value: "plus", text: "Plus" },
  { key: "glider", value: "glider", text: "Glider" },
  { key: "pulsar", value: "pulsar", text: "Pulsar" },
  { key: "diehard", value: "diehard", text: "Diehard" },
  {
    key: "gliderGunSE",
    value: "gliderGunSE",
    text: "Gosper Glider Gun (SE)",
  },
  {
    key: "gliderGunNE",
    value: "gliderGunNE",
    text: "Gosper Glider Gun (NE)",
  },
  {
    key: "duelingGliderGuns",
    value: "duelingGliderGuns",
    text: "Gosper Gliders Dueling",
  },
  { key: "infiniteGrowth", value: "infiniteGrowth", text: "Infinite Growth" },
  { key: "testingPatterns", value: "testingPatterns", text: "testingPatterns" },
];

export const loadPreset = (preset) => {
  let newWorld = createWorld();
  const half = Math.floor(WORLD_SIZE / 2);
  switch (preset) {
    case "line":
      return line(newWorld, half);
    case "glider":
      return glider(newWorld, half);
    case "cross":
      return cross(newWorld, half);
    case "thickCross":
      return thickCross(newWorld, half);
    case "plus":
      return plus(newWorld, half);
    case "pulsar":
      return pulsar(newWorld, half);
    case "diehard":
      return diehard(newWorld, half);
    case "gliderGunSE":
      return gliderGunSE(newWorld, half, 0, 0);
    case "gliderGunNE":
      return gliderGunNE(newWorld, half, 0, 0);
    case "duelingGliderGuns":
      return duelingGliderGuns(newWorld, half, 0, 0);
    case "infiniteGrowth":
      return infiniteGrowth(newWorld, half);
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

const line = (world, half) => {
  world[half].fill(ALIVE);
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

const plus = (world, half) => {
  const n = world.length - 1;
  for (let i = 0; i <= n; i++) {
    world = toMirror(world, 0, half, i, "dia");
  }
  return world;
};

const glider = (world, startX, startY) => {
  const half = Math.floor(WORLD_SIZE / 2);
  const x = half;
  const y = half;
  world[x][y] = ALIVE;
  world[x][y + 1] = ALIVE;
  world[x][y + 2] = ALIVE;
  world[x - 1][y] = ALIVE;
  world[x - 2][y + 1] = ALIVE;
  return world;
};

const pulsar = (world, half) => {
  for (let i = 2; i <= 4; i++) {
    world = toMirror(world, half, i, 1, "quad");
    world = toMirror(world, half, i, 6, "quad");
    world = toMirror(world, half, 1, i, "quad");
    world = toMirror(world, half, 6, i, "quad");
  }
  return world;
};

const diehard = (world, half) => {
  return world;
};

const gliderGunSE = (world, half, x, y) => {
  world = toBlock(world, half - 18 - x, half + 1 - y);
  world = toBlock(world, half + 16 - x, half - 1 - y);
  world = toEgg(world, half - 8 - x, half + 1 - y);
  world = ship1(world, half + 2 - x, half - 1 - y);
  return world;
};

const gliderGunNE = (world, half, x, y) => {
  world = toBlock(world, half - 18 - x, half - 1 - y);
  world = toBlock(world, half + 16 - x, half + 1 - y);
  world = toEgg(world, half - 8 - x, half - 1 - y);
  world = ship1(world, half + 2 - x, half + 1 - y);
  return world;
};

const duelingGliderGuns = (world, half) => {
  world = gliderGunSE(world, half, 8, 10);
  world = gliderGunNE(world, half, 8, -10);
  return world;
};

const infiniteGrowth = (world, half) => {
  const x = half - 20;
  world[half].splice(x, 8, 1, 1, 1, 1, 1, 1, 1, 1);
  world[half].splice(x + 9, 5, 1, 1, 1, 1, 1);
  world[half].splice(x + 17, 3, 1, 1, 1);
  world[half].splice(x + 26, 7, 1, 1, 1, 1, 1, 1, 1);
  world[half].splice(x + 34, 5, 1, 1, 1, 1, 1);
  return world;
};