export let WORLD_SIZE_3D = 5;
export let GEN_TIME_3D = 500;
export const ALIVE = 1;
export const DEAD = 0;
export let RULES = {
  El: 5,
  Eu: 6,
  Fl: 6,
  Fu: 6,
};

export let Eu = 6;
export let Fl = 6;
export let El = 5;
export let Fu = 6;

export const setWorldSize = (gridSize) => {
  WORLD_SIZE_3D = gridSize;
  return WORLD_SIZE_3D;
};

export const setSpeed = (genSpeed) => {
  GEN_TIME_3D = genSpeed;
  return GEN_TIME_3D;
};

export const setRules = (rules) => {
  RULES.El = rules.El;
  RULES.Eu = rules.Eu;
  RULES.Fl = rules.Fl;
  RULES.Fu = rules.Fu;
};

export const createWorld = () => {
  return Array(WORLD_SIZE_3D)
    .fill()
    .map(
      () =>
        Array(WORLD_SIZE_3D)
          .fill()
          .map(() => Array(WORLD_SIZE_3D).fill(DEAD))
    );
};

export const getNeighbors3D = (x, y, z) => {
  const ret = [
    [x - 1, y - 1, z - 1],
    [x, y - 1, z - 1],
    [x + 1, y - 1, z - 1],
    [x - 1, y, z - 1],
    [x, y, z - 1],
    [x + 1, y, z - 1],
    [x - 1, y + 1, z - 1],
    [x, y + 1, z - 1],
    [x + 1, y + 1, z - 1],
    [x - 1, y - 1, z],
    [x, y - 1, z],
    [x + 1, y - 1, z],
    [x - 1, y, z],
    [x + 1, y, z],
    [x - 1, y + 1, z],
    [x, y + 1, z],
    [x + 1, y + 1, z],
    [x - 1, y - 1, z + 1],
    [x, y - 1, z + 1],
    [x + 1, y - 1, z + 1],
    [x - 1, y, z + 1],
    [x, y, z + 1],
    [x + 1, y, z + 1],
    [x - 1, y + 1, z + 1],
    [x, y + 1, z + 1],
    [x + 1, y + 1, z + 1],
  ].filter((cell) => {
    return (
      cell[0] >= 0 &&
      cell[0] < WORLD_SIZE_3D &&
      cell[1] >= 0 &&
      cell[1] < WORLD_SIZE_3D &&
      cell[2] >= 0 &&
      cell[2] < WORLD_SIZE_3D
    );
  });
  return ret;
};

export const aliveNeighbors = (world, x, y, z) => {
  const res = getNeighbors3D(x, y, z).filter((cell) => {
    return world[cell[0]][cell[1]][cell[2]] === ALIVE;
  }).length;
  return res;
};

export const nextGen = (world) => {
  let newWorld = createWorld();
  for (let x = 0; x < WORLD_SIZE_3D; x++) {
    for (let y = 0; y < WORLD_SIZE_3D; y++) {
      for (let z = 0; z < WORLD_SIZE_3D; z++) {
        const alive = aliveNeighbors(world, x, y, z);
        const cell = world[x][y][z];

        newWorld[x][y][z] =
          (cell === ALIVE && RULES.El <= alive && alive <= RULES.Eu) ||
          (cell === DEAD && RULES.Fl <= alive && alive <= RULES.Fu)
            ? ALIVE
            : DEAD;
      }
    }
  }
  return newWorld;
};

export const changeArray = (arr, i, value) => {
  return [...arr.slice(0, i), value, ...arr.slice(i + 1)];
};

export const randomFill = (world) => {
  return world.map((plane) =>
    plane.map((row) => row.map((cell) => Math.round(Math.random())))
  );
};