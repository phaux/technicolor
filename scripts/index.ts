import * as fs from "node:fs/promises";
import { colorsDark, colorsLight } from "./colors.ts";
import { getVscodeTheme } from "./getVscodeTheme.ts";
import { zedTheme } from "./zedTheme.ts";

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-dark.json",
  JSON.stringify(getVscodeTheme("Dark", colorsDark), null, 2),
);

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-light.json",
  JSON.stringify(getVscodeTheme("Light", colorsLight), null, 2),
);

await fs.writeFile(
  import.meta.dirname + "/../zed/themes/technicolor.json",
  JSON.stringify(zedTheme, null, 2),
);
