import baseConfig from './configs/base.mjs';
import commentsConfig from './configs/comments.mjs';
import reactConfig from './configs/react.mjs';
import stylisticConfig from './configs/stylistic.mjs';
import typedReactConfig from './configs/typed-react.mjs';
import typescriptConfig from './configs/typescript.mjs';
import baseRules from './rules/base.js';
import commentsRules from './rules/comments.js';
import reactRules from './rules/react.js';
import stylisticRules from './rules/stylistic.js';
import typedReactRules from './rules/typed-react.js';
import typescriptRules from './rules/typescript.js';

export default {
  configs: {
    default: [
      ...baseConfig,
      ...commentsConfig,
      ...stylisticConfig,
      ...typescriptConfig,
    ],
    baseConfig,
    commentsConfig,
    reactConfig,
    stylisticConfig,
    typedReactConfig,
    typescriptConfig,
  },
  rules: {
    baseRules,
    commentsRules,
    reactRules,
    stylisticRules,
    typedReactRules,
    typescriptRules,
  },
};
