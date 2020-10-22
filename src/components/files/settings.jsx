export const colorOptions = [
  { key: "default", value: "default", text: "Default" },
  { key: "greyMode", value: "greyMode", text: "Grey Mode" },
  { key: "dayMode", value: "dayMode", text: "Day Mode" },
  { key: "darkMode", value: "darkMode", text: "Dark Mode" },
  { key: "random", value: "random", text: "Default with Random Blocks" },
];

export const gridSizeOptions = [
  { key: "25", value: 25, text: "25" },
  { key: "30", value: 30, text: "30" },
  { key: "35", value: 35, text: "35" },
  { key: "40", value: 40, text: "40" },
  { key: "45", value: 45, text: "45" },
  { key: "50", value: 50, text: "50" },
  { key: "55", value: 55, text: "55" },
  { key: "60", value: 60, text: "60" },
  { key: "65", value: 65, text: "65" },
  { key: "70", value: 70, text: "70" },
  { key: "75", value: 75, text: "75" },
  { key: "80", value: 80, text: "80" },
  { key: "85", value: 85, text: "85" },
  { key: "90", value: 90, text: "90" },
  { key: "95", value: 95, text: "95" },
  { key: "100", value: 100, text: "100" },
  { key: "125", value: 125, text: "125" },
  { key: "150", value: 150, text: "150" },
  { key: "200", value: 200, text: "200" },
];

export const grid3DSizeOptions = [
  { key: "5", value: 5, text: "5" },
  { key: "10", value: 10, text: "10" },
  { key: "15", value: 15, text: "15" },
  { key: "20", value: 20, text: "20" },
  { key: "25", value: 25, text: "25" },
  { key: "30", value: 30, text: "30" },
  { key: "35", value: 35, text: "35" },
  { key: "40", value: 40, text: "40" },
];

export const generationSpeed = [
  { key: "10", value: 10, text: "10" },
  { key: "25", value: 25, text: "25" },
  { key: "50", value: 50, text: "50" },
  { key: "90", value: 90, text: "90" },
  { key: "100", value: 100, text: "100" },
  { key: "500", value: 500, text: "500" },
  { key: "1000", value: 1000, text: "1000" },
];

export const loadColorStyling = (colorStyle) => {
  switch (colorStyle) {
    case "greyMode":
      return greyMode();
    case "darkMode":
      return darkMode();
    case "dayMode":
      return dayMode();
    case "randomColor":
      return randomColor();
    default:
      return "greyMode";
  }
};

export const loadGridSizeG = (size) => {
  return size;
};

const greyMode = (world, half) => {
};

const dayMode = (world) => {
};

const randomColor = (world, half) => {
};

const darkMode = (world, startX, startY) => {
};