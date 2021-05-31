# bacnetzviewer_plain

BACnetz Viewer without React

## Starting

Without electron forge:

```
npm run start-dev
```

With electron forge:

```
npm start
```

## Electron Forge

### Install electron forge and install app (only once)

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

### Create binaries

In your package.json, first make sure to fill in the author and description fields.
They should not be empty, otherwise electron-forge throws errors during the Squirrel installer build on windows.
https://github.com/electron-userland/electron-forge/issues/1662

```
npm run make
```

The binaries are placed into the ./out folder.