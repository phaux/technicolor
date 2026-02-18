import * as fs from "node:fs/promises";
import { zedTheme } from "./theme-zed.ts";
import { vscodeThemeDark } from "./theme-vscode.ts";

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-dark.json",
  JSON.stringify(vscodeThemeDark, null, 2),
);

await fs.writeFile(
  import.meta.dirname + "/../zed/themes/technicolor.json",
  JSON.stringify(zedTheme, null, 2),
);
