import * as fs from "node:fs/promises";
import { zedTheme } from "./theme-zed.ts";

// await fs.writeFile(
//   import.meta.dirname + "/../vscode/themes/technicolor-dark.json",
//   JSON.stringify(vscodeTheme, null, 2),
// );

await fs.writeFile(
  import.meta.dirname + "/../zed/themes/technicolor.json",
  JSON.stringify(zedTheme, null, 2),
);
