# FULLHAUS ESLint configuration

This repository contains the ESLint configuration used for projects maintained by [**FULL**HAUS](https://www.fullhaus.de/). It provides
a comprehensive set of ESLint rules configurations for both modern flat setups (ESLint v9+) and legacy projects (ESLint v8).

## Installation

You can install the **FULL**HAUS ESLint configuration using a package manager of your choice:
```shell
pnpm add @fullhaus/eslint-config --save-dev
```

## Usage

### Flat config

For projects using the [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files), you can use following setup:

```js
import fhEslint from '@fullhaus/eslint-config';

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
    "@fullhaus/eslint-config/legacy"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### Custom Configurations

In case your project requires specific configurations (for example, a JavaScript-only codebase or just stylistic rules), you can selectively extend the configurations you need.

**Flat config:**

```js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...fhEslint.configs.baseConfig, // js only
  ...fhEslint.configs.stylisticConfig, // stylistic only
];
```

**Legacy config**
```json
{
  "extends": [
    "@fullhaus/eslint-config/legacy/configs/base",
    "@fullhaus/eslint-config/legacy/configs/stylistic"
  ]
}
```

### React

For React projects, you can extend your ESLint configuration with React-specific rules.

**Flat config:**

```js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...fhEslint.configs.default,
  ...fhEslint.configs.reactConfig,
  // or when using React with TypeScript (.tsx):
  ...fhEslint.configs.typedReactConfig,
];
```

**Legacy config:**

```json lines
{
  "extends": [
    "@fullhaus/eslint-config/legacy",
    "@fullhaus/eslint-config/legacy/configs/react",
    // or when using React with TypeScript (.tsx):
    "@fullhaus/eslint-config/legacy/configs/typed-react"
  ]
}
```

### Frameworks
Frameworks (like Next.js) come with their own ESLint configuration, which can lead to plugin conflicts. To prevent these issues, our configuration provides all necessary rules. Here’s an example setup for a Next.js project:

```js
// example using next.js
import fhEslint from '@fullhaus/eslint-config';

export default [
  ...compat.extends('next/core-web-vitals'),
  ...fhEslint.configs.default,
  {
    rules: fhEslint.rules.typedReactRules,
  },
];
```
> [!NOTE]
> Adjust the usage of `compat.extends` as required by your project’s setup.

## Available Configurations and Rules
The **FULL**HAUS ESLint Configuration package provides a modular set of configurations and rules designed to accommodate different project needs. Below is a list of the available options:

### Configurations
| Flat               | Legacy                       | Description                                 |
|--------------------|------------------------------|---------------------------------------------|
| `default`          | `legacy`                     | The full recommended configuration          |
| `baseConfig`       | `legacy/configs/base`        | JavaScript-focused configuration            |
| `stylisticConfig`  | `legacy/configs/stylistic`   | Stylistic rules for code consistency        |
| `reactConfig`      | `legacy/configs/react`       | Contains React-specific ESLint rules        |
| `typedReactConfig` | `legacy/configs/typed-eact`) | React configuration for TypeScript projects |
| `typescriptConfig` | `legacy/configs/typescript`  | TypeScript-focused configuration            |

### Rules
- `baseRules`: Rules for JavaScript
- `commentsRules`: Rules for ESLint comments
- `reactRules`: Rules for React
- `stylisticRules`: Rules for code styling
- `typedReactRules`: Rules for React using TypeScript
- `typescriptRules`: Rules for TypeScript

Feel free to mix and match these configurations and rules to best suit your project’s requirements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
