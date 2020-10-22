export const setGrid = (style) => {
  switch (style.toLowerCase()) {
    case "greymode":
      return ["#424151", null];
    case "daymode":
      return ["#f5fd2e", "#1fdb97"];
    case "darkmode":
      return ["#ffffff", "#000000"];
    case "random":
      let random = Math.floor(Math.random() * 16777215).toString(16);
      return [`#${random}`, null];
    default:
      return ["#04ffff", null];
  }
};

export const setCam = (world) => {
  console.log("yep");
};