# HTML Components

Create a project with HTML components.

Pre-alpha!

```bash
npx @htmlcomponents/create
```

Installs Vite and postCSS.

## Run with Vite

```bash
cd path/to/new/project
npm run dev

# or
npm run build
npm run preview
```

## To run with no build system (i.e. without Vite)

Copy /public/import and /public/assets to the root directory of new project.

In VS Code, use an extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Right-click index.html at root of new project and select "Open with Live Server.

If using Live Server, be sure that your new project is at the top level of the current VS Code workspace, not in a subfolder of the workspace.

## Vite-html-import-plugin

Vite-html-import-plugin transforms HTML by removing and replacing <html-import> custom elements whose source files are in the public directory.

Without this plugin, html-import will import its content at run time.

vite.config.js:

```javascript
import { defineConfig } from "vite";

import viteHTMLImportPlugin from "./components/imports/viteHTMLImportPlugin/viteHTMLImportPlugin";

export default defineConfig({
  plugins: [viteHTMLImportPlugin()],
});
```
