import baseConfig from './configs/base.mjs';
import tsConfig from './configs/typescript.mjs';
import reactConfig from './configs/react.mjs';

export default {
  configs: {
    default: [
      ...baseConfig,
      ...tsConfig,
    ],
    base: baseConfig,
    typescript: tsConfig,
    react: reactConfig,
  },
};
