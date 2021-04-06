import { Colors } from "./types";

export const baseColors = {
  failure: "#ff0000",
  primary: "#4fffb1", //
  primaryBright: "#4fffb1", //
  primaryDark: "#4fffb1", //
  secondary: "#44ff69",
  success: "#5aff55",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#4fffb1",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#166265",
  textDisabled: "#5CC5B0",
  textSubtle: "#397B6E ",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
  bubblegum: "linear-gradient(139.73deg, #95E1E4 0%,  #29BCC2 100%)",
  },
  
  };
  
  export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6EECD3",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#166265",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#95E1E4",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
  bubblegum: "linear-gradient(139.73deg, #95E1E4 0%, #29BCC2 100%)",
  },
};
/*
export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "##54ffe2",
  backgroundDisabled: "##54ffe2",
  contrast: "#000000",
  invertedContrast: "##54ffe2",
  input: "#eaf4f0",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#000000",
  textSubtle: "#000000",
  borderColor: "#000000",
  card: "##54ffe2",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #000000 0%, ##54ffe2 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4fffd2",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#e3f3fc",
  invertedContrast: "#132621",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#e3f3fc",
  textDisabled: "#666171",
  textSubtle: "#c3d1d4",
  borderColor: "#4b635a",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
*/

/*
import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
*/
