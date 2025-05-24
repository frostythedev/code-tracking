module.exports = {
  plugins: ["prefer-arrow", "import", "prettier", "unused-imports", "jsdoc"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:jsdoc/recommended",
  ],
  rules: {
    "jsdoc/require-jsdoc": [
      "error",
      {
        contexts: [
          "TSTypeAliasDeclaration",
          "TSInterfaceDeclaration",
          "TSMethodSignature",
          // "TSPropertySignature",
          "TSDeclareFunction",
          "TSEnumDeclaration",
        ],
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/no-unresolved": ["error", { caseSensitiveStrict: true }],
    "import/prefer-default-export": "off",
    "import/no-duplicates": "error",
    complexity: ["error", 8],
    "max-lines": ["error", 200],
    "max-depth": ["error", 3],
    "max-params": ["error", 4],
    eqeqeq: ["error", "smart"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
... (truncated for brevity)