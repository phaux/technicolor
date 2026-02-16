import { colors, VitesseThemes } from "./colors.ts";

export interface GetThemeOptions {
  color: "light" | "dark";
  name: string;
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr)) return arr;
  return [arr];
}

function getColors(style: "light" | "dark"): typeof colors {
  if (style === "dark") {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {};
    Object.entries(colors).forEach(([name, val]) => {
      if (name === "black") darkColors.white = val;
      else if (name === "white") darkColors.black = val;
      else darkColors[name] = [...toArray(val)].reverse();
    });
    return darkColors;
  } else {
    return colors;
  }
}

export function createThemeHelpers({ color }: GetThemeOptions) {
  const pick = (options: { light?: string; dark?: string }) => options[color];

  const v = (key: keyof typeof VitesseThemes, op = "") => {
    let obj = VitesseThemes[key];

    if (typeof obj === "string") obj = [obj, obj];

    return pick({ light: obj[1] + op, dark: obj[0] + op });
  };

  const colors = getColors(color);

  return {
    pick,
    colors,
    v,
  };
}
