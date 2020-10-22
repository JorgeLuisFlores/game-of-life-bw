export const colorOptions = [
  { key: "default", value: "default", text: "Default" },
  { key: "greyMode", value: "greyMode", text: "Grey Mode" },
  { key: "dayMode", value: "dayMode", text: "Day Mode" },
  { key: "darkMode", value: "darkMode", text: "Dark Mode" },
];

export const gridSizeOptions = [
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