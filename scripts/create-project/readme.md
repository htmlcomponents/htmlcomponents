## Test locally

in htmlcomponents directory:

```
npm run create-project:build
npm i -g
cd path/to/new-project
npx htmlcomponents
```

To uninstall

```
cd path/to/htmlcomponents
npm uninstall -g
```

## Publish

in htmlcomponents:

```
npm login
npm publish --access=public

cd path/to/new-project
npx htmlcomponents
```

## Update package

```
npm version <type (patch|minor|major)>
npm publish --access=public
```

## NPX resources

https://blog.shahednasser.com/how-to-create-a-npx-tool/

https://petermekhaeil.com/how-to-build-an-npx-starter-template/

https://bonsaiilabs.com/create-npx-starter-command/

https://www.youtube.com/watch?v=UxdSoefSxrA

https://www.npmjs.com/package/@wordpress/create-block
