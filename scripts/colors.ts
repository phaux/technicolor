export interface Colors {
  canvas: readonly string[];
  ink: readonly string[];
  glow: readonly string[];
  green: readonly string[];
  cyan: readonly string[];
  blue: readonly string[];
  purple: readonly string[];
  magenta: readonly string[];
  pink: readonly string[];
  orange: readonly string[];
  yellow: readonly string[];
}

export const colorsDark: Colors = {
  canvas: ["#1A1A20", "#1F1F28", "#252530", "#2C2C3A", "#343444"],
  ink: ["#66666f", "#8686a8", "#afafc4", "#cacad8"],
  glow: ["#CECCFF0D", "#CECCFF16", "#B9B3FF22", "#A099FF2A", "#B9B3FF36"],
  green: ["#236e54", "#53b996", "#92ddc3"],
  cyan: ["#2e6f81", "#6ec5dd", "#9edaeb"],
  blue: ["#385c9b", "#769bdb", "#abc6f3"],
  purple: ["#564794", "#9284db", "#beb6f0"],
  magenta: ["#844092", "#c778d8", "#daaae9"],
  pink: ["#88355f", "#c46494", "#e0a4c2"],
  orange: ["#974952", "#df8692", "#ebb0b6"],
  yellow: ["#88563d", "#ce9c82", "#e6c3b0"],
};

export const colorsLight: Colors = {
  canvas: ["#FEFEFF", "#f0f0f4", "#e6e6ea", "#dddde4", "#d0d0da"],
  ink: ["#aaaab5", "#808090", "#55556a", "#404045"],
  glow: ["#2824a40d", "#1f1aa616", "#17106422", "#0f06972a", "#17124636"],
  green: ["#92ddc3", "#3aa882", "#236e54"],
  cyan: ["#9edaeb", "#44a2bd", "#2e6f81"],
  blue: ["#abc6f3", "#5885d1", "#385c9b"],
  purple: ["#beb6f0", "#806fd4", "#564794"],
  magenta: ["#daaae9", "#b752ce", "#844092"],
  pink: ["#e0a4c2", "#c75d92", "#88355f"],
  orange: ["#ebb0b6", "#dd757e", "#974952"],
  yellow: ["#e6c3b0", "#c98b6a", "#88563d"],
};
