module.exports = {
  env: {
    es6: true,
		node: true,
		jest: true,
  },
  extends: [
		'standard',
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
		'@typescript-eslint',
		'prettier'
	],
	settings: {
		"import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
        "@typescript-eslint/parser": [".ts",".tsx"]
    },
    "import/resolver": {
        "node": {
            "extensions": [".js",".jsx",".ts",".tsx"]
        }
    }
	},
  rules: {
		"import/extensions": ["error", "ignorePackages", {
			"js": "never",
			"ts": "never",
			"tsx": "never",
			"mts": "never"
		}]
  },
};
