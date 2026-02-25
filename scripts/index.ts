import * as fs from "node:fs/promises";
import { vscodeThemeDark } from "./vscodeThemeDark.ts";
import { zedTheme } from "./zedTheme.ts";

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-dark.json",
  JSON.stringify(vscodeThemeDark, null, 2),
);

await fs.writeFile(
  import.meta.dirname + "/../zed/themes/technicolor.json",
  JSON.stringify(zedTheme, null, 2),
);
