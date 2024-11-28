# FULLHAUS eslint configuration

This repository contains the ESLint configuration used for projects maintained by [**FULL**HAUS](https://www.fullhaus.de/). It provides
configurations for both modern flat setups (ESLint v9+) and legacy projects (ESLint v8), with specific options for
TypeScript and non-TypeScript codebases.

## Installation

You can install the **FULL**HAUS ESLint configuration using a package manager of your choice:
```shell
pnpm add FULLHAUS-GmbH/eslint-config-fullhaus --save-dev
```

### Flat config

For projects using the [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files), you can
use the following setup:

```js
import fhEslint from 'eslint-config-fullhaus';

export default [
  ...fhEslint.configs.default,
];
```

### Legacy config

If you're using a legacy configuration of ESLint (v8), extend the config as shown below. You must also provide a value
for the `parserOptions.project` property. Usually this is the path to your`tsconfig.json`.

```json
{
  "extends": [
    "eslint-config-fullhaus/legacy"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### Non TypeScript codebase

If your project does not use TypeScript, you can skip the TypeScript-specific configuration.

**Flat config:**

```js
import fhEslint from 'eslint-config-fullhaus';

export default [
  ...fhEslint.configs.base,
];
```

**Legacy config:**

```json
{
  "extends": [
    "eslint-config-fullhaus/legacy/configs/base"
  ]
}
```

### React

For projects using React, you can extend your config with the React-specific ESLint rules.

**Flat config:**

```js
import fhEslint from 'eslint-config-fullhaus';

export default [
  ...fhEslint.configs.react,
];
```

**Legacy config:**

```json
{
  "extends": [
    "eslint-config-fullhaus/legacy/configs/react"
  ]
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
