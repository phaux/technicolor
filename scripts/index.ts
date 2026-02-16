import * as fs from "node:fs/promises";
import getTheme from "./theme.ts";

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-light.json",
  JSON.stringify(
    getTheme({
      color: "light",
      name: "Technicolor Light",
    }),
    null,
    2,
  ),
);

await fs.writeFile(
  import.meta.dirname + "/../vscode/themes/technicolor-dark.json",
  JSON.stringify(
    getTheme({
      color: "dark",
      name: "Technicolor Dark",
    }),
    null,
    2,
  ),
);
