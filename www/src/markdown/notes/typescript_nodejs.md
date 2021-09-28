---
title: Setting up Typescript + Node.js
title_nav: Typescript + Node.js
hide: false
---

These are some quick notes on creating a new Typescript Node.js project that uses
live development reloading with [ts-node-dev](https://github.com/whitecolor/ts-node-dev) and testing with [Jest](https://jestjs.io/docs/en/getting-started).

# Setup Typescript
```shell
# Setup yarn package w/ default options
npm init -y

# Add typescript deps
npm install typescript ts-node-dev @types/node --save-dev
```

## tsconfig.json
Add a tsconfig.json to configure the Typescript compiler. You can use `npx tsc --init` to create a file with a list of all options. A simplified version that compiles all code in `/src` and outputs it to `/build`:

```json
{
  "compilerOptions": {
    "esModuleInterop": false,
    "module": "commonjs",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "outDir": "build",
    "strict": true,
    "target": "es6"
  },
  "include": ["src/**/*"]
}
```

## package.json scripts
Add a scripts section to package.json for development and building. Replace `index.ts` with the entry point:

```json
"scripts": {
  "dev": "ts-node-dev --respawn  ./src/index.ts",
  "prod": "tsc --build && node ./build/index.js",
  "build": "tsc"
}
```

You can now start development mode using:

```shell
npm run dev
```

# Setup Jest for testing
```shell
# Install deps
npm install jest @types/jest ts-jest --save-dev

# Create a defualt config file
npx ts-jest config:init

# Or with npm:
yarn ts-jest config:init
```

Add new scripts to `package.json` to run tests in watch mode or in
debug mode.

```json
"scripts": {
    "test" : "jest --watchAll",
    "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand"
}
```

Create a sample test in `src/`. By default jest will look for files 
ending in `.spec.ts` or `.test.ts`, though this can be customized.

An example test:

```typescript
import { doSomething } from "./index";

test('sample', () => {
  expect(doSomething()).toEqual(42);
});
```

## Debugging with Chrome
To run tests with a debugger, add `debugger` to your test case you wish
to debug. Run `yarn test:debug`. Open [about:inspect](about:inspect) 
in  Chrome and select `Open dedicated DevTools for Node`. The dev tools
instance should connect. Note: this can be flaky with WSL2. You might need 
to run `wsl --shutdown` in Powershell in order to allow node to run the debugger
on the proper port. [See bug](https://github.com/microsoft/WSL/issues/5298).

## Debugging with VSCode
Create a `launch.json` file in a `.vscode\` subfolder of your projects roots.
You'll now be able to launch a debugger directly in VSCode via Run > Start Debugging.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/.bin/jest",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9229
    }
  ]
}
```

# Setup prettier
I use the [Prettier VSCode extension](https://github.com/prettier/prettier-vscode) for code
formatting. Generally I don't like to think about formatting and have the VSCode set
to auto-format on save:

```javascript
// Inside vscode settings
"editor.formatOnSave": true,
```

 To avoid auto-formatting causing problems when I'm working outside of my projects, I also
 require a `.prettierrc` file to be present in the project for formatting to work.

```javascript
"prettier.requireConfig": true
```

An example .prettierrc file:

```json
{
  "arrowParens": "avoid",
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "bracketSpacing": false
}
```
