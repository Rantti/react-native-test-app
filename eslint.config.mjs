import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  {ignores: ['.expo', 'babel.config.js']},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      'react/prop-types': 0,
    }
  }
];
