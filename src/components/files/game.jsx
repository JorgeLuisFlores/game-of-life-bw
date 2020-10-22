export let WORLD_SIZE = 70;
export let GEN_TIME = 100;
export const ALIVE = 1;
export const DEAD = 0;
export const RULES = {
  El: 2,
  Eu: 3,
  Fl: 3,
  Fu: 3,
};

export const getWorldSize = (gridSize) => {
  WORLD_SIZE = gridSize;
  return WORLD_SIZE;
};

export const getSpeed = (genSpeed) => {
  GEN_TIME = genSpeed;
  return GEN_TIME;
};

export const setRules = (rules) => {
  RULES.El = rules.El;
  RULES.Eu = rules.Eu;
  RULES.Fl = rules.Fl;
  RULES.Fu = rules.Fu;
};

export const createWorld = () => {
  return Array(WORLD_SIZE)
    .fill()
    .map(() => Array(WORLD_SIZE).fill(DEAD));
};

export const getNeighbors = (x, y) => {
  return [
    [x, y + 1],
    [x, y - 1],
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ].filter((cell) => {
    return (
      cell[0] >= 0 &&
      cell[0] < WORLD_SIZE &&
      cell[1] >= 0 &&
      cell[1] < WORLD_SIZE
    );
  });
};

export const aliveNeighbors = (world, x, y) => {
  return getNeighbors(x, y).filter((living) => {
    return world[living[0]][living[1]] === ALIVE;
  }).length;
};

export const nextGen = (world) => {
  let newWorld = createWorld();
  for (let x = 0; x < WORLD_SIZE; x++) {
    for (let y = 0; y < WORLD_SIZE; y++) {
      const alive = aliveNeighbors(world, x, y);
      const cell = world[x][y];
      newWorld[x][y] =
        (cell === ALIVE && RULES.El <= alive && alive <= RULES.Eu) ||
        (cell === DEAD && RULES.Fl <= alive && alive <= RULES.Fu)
          ? ALIVE
          : DEAD;
    }
  }
  return newWorld;
};

export const changeArray = (arr, i, value) => {
  return [...arr.slice(0, i), value, ...arr.slice(i + 1)];
};

export const randomFill = (world) => {
  return world.map((row) => row.map((cell) => Math.round(Math.random())));
};