export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

// [dark, light]
export const VitesseThemes = {
  primary: ["#4d9375", "#1c6b48"],

  foreground: ["#E0E0EB", "#393a34"],
  activeForeground: ["#9C9CB5", "#4e4f47"],
  secondaryForeground: ["#6C6C93", "#393a3490"],

  ignored: ["#dedcd550", "#393a3450"],
  faded: ["#dedcd510", "#393a3410"],
  border: ["#191919", "#f0f0f0"],

  background: ["#1A1A23", "#ffffff"],
  activeBackground: ["#2B2B3B", "#f7f7f7"],
  selectionBackground: ["#eeeeee18", "#22222218"],
  selectionBackgroundActive: ["#eeeeee18", "#22222218"],
  selectionBackgroundInActive: ["#eeeeee10", "#22222210"],

  comment: ["#6C6C93", "#a0ada0"],
  string: ["#55BD97", "#b56959"],
  variable: ["#D06A97", "#b07d48"],
  keyword: ["#D08DD9", "#1e754f"],
  number: ["#DB8380", "#2f798a"],
  boolean: ["#D08DD9", "#1e754f"],
  operator: ["#78D0D0", "#ab5959"],
  function: ["#85B0ED", "#59873a"],
  constant: ["#DB8380", "#a65e2b"],
  class: ["#CE9F7D", "#5a6aa6"],
  interface: ["#D06A97", "#2e808f"],
  type: ["#CE9F7D", "#2e8f82"],
  builtin: ["#D08DD9", "#ab5959"],
  property: ["#948BD9", "#998418"],
  namespace: ["#55BD97", "#b05a78"],
  punctuation: ["#666666", "#999999"],
  decorator: ["#85B0ED", "#bd8f8f"],
  regex: ["#CE9F7D", "#ab5e3f"],

  // colors
  green: ["#55BD97", "#1e754f"],
  cyan: ["#78D0D0", "#2993a3"],
  blue: ["#85B0ED", "#296aa3"],
  red: ["#D06A97", "#ab5959"],
  orange: ["#DB8380", "#a65e2b"],
  yellow: ["#CE9F7D", "#bda437"],
  magenta: ["#D08DD9", "#a13865"],
} satisfies Record<string, [string, string] | string>;
