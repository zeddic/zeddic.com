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
yarn init -y

# Add typescript deps
yarn add typescript ts-node-dev @types/node --dev
```

## tsconfig.json
Add a tsconfig.json to configure the Typescript compiler. You can use `yarn tsc --init` to create a file with a list of all options. A simplified version that compiles all code in `/src` and outputs it to `/build`:

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
yarn run dev
```

# Setup Jest for testing
```shell
# Install deps
yarn add jest @types/jest ts-jest --dev

# Create a default config file
yarn ts-jest config:init
```

Add a new script to `package.json` to run tests in watch mode:

```json
"scripts": {
    "test" : "jest --watchAll"
}
```

Create a sample test in src. By default jest will look for files 
ending in `.spec.ts` or `.test.ts`, though this can be customized.

An example test:

```typescript
import { doSomething } from "./index";

test('sample', () => {
  expect(doSomething()).toEqual(42);
});
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
