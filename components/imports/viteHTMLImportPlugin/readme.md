# viteHTMLImportPlugin

Vite-html-import-plugin transforms HTML by removing and replacing <html-import> custom elements whose source files are in the public directory.

Without this plugin, html-import will import its content at run time.

## How the HTML is Transformed

For example:

```html
<import-html source="/imports/home-header.html"></import-html>
```

transforms to:

```html
(html content in file at /imports/home-header.html)
```

Note that the directory /imports/ is expected to be in the /public/ directory.

Also, the attribute "data-hidden-until-imports-imported" on the document's HTML element, which is used by html-import custom elements to avoid FOUC flash of unstyled content on initial load, is removed.

in other words:

```html
<html lang="en" data-hidden-until-imports-imported></html>
```

is transformed to

```html
<html lang="en"></html>
```

## Vite Configuration file

vite.config.js:

```javascript
import { defineConfig } from "vite";

import viteHTMLImportPlugin from "./components/imports/viteHTMLImportPlugin/viteHTMLImportPlugin";

export default defineConfig({
  plugins: [viteHTMLImportPlugin()],
});
```
