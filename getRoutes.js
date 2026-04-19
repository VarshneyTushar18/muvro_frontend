import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), "app");

function getRoutes(dir, baseRoute = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const folder = entry.name;

      // Skip special folders
      if (folder.startsWith("(") || folder.startsWith("_")) continue;
      if (["api", "components", "ui", "utilities"].includes(folder)) continue;

      const routePath = path.join(dir, folder);
      const route = `${baseRoute}/${folder}`;

      // Check if page.js exists
      const hasPage = fs.existsSync(path.join(routePath, "page.js"));

      if (hasPage) {
        routes.push(route);
      }

      // Recurse deeper
      routes = routes.concat(getRoutes(routePath, route));
    }
  }

  return routes;
}

const routes = ["/", ...getRoutes(appDir)];

console.log("Detected Routes:\n");
console.log(routes);