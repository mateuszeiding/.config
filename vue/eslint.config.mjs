import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import vueRecommendedConfig from 'eslint-plugin-vue';
import vueESLintParser from 'vue-eslint-parser';
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        ignores: ['.vs', 'bin', 'dist', 'node_modules', 'obj'],
    },
    {
        languageOptions: {
            parser: vueESLintParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    },
    ...eslint.configs.recomended,
    ...tseslint.configs.recommended,
    ...vueRecommendedConfig.configs['flat/recommended'],
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        settings: {
            'import/resolver': {
                // You will also need to install and configure the TypeScript resolver
                // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
                typescript: true,
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            // ESLint
            "block-scoped-var": "error",
            "consistent-return": "error",
            "curly": ["error", "all"],
            "no-alert": "error",
            "no-extra-bind": "error",
            "no-fallthrough": "off",
            "no-multi-str": "error",
            "no-shadow-restricted-names": "error",
            "no-throw-literal": "error",
            "no-unused-expressions": "error",
            "no-useless-call": "error",
            "no-useless-catch": "error",
            "no-useless-concat": "error",
            "no-var": "error",
            "one-var": ["error", "never"],
            "prefer-const": "error",
            "prefer-spread": "error",
            "prefer-rest-params": "error",
            "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
            "require-await": "error",
    
            // Typescript ESLint
            "@typescript-eslint/ban-ts-comment": "off", // TS comments are useful at times
            "@typescript-eslint/no-useless-constructor": "error",
            "@typescript-eslint/explicit-member-accessibility": "off", // Not sure we want
            "@typescript-eslint/no-parameter-properties": "off", // We want to be able to do parameter properties
            "@typescript-eslint/prefer-interface": "off", // Research, pros & cons
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "interface",
                    format: ["PascalCase"],
                    custom: {
                        regex: "^I[A-Z]",
                        match: true
                    }
                }
            ],
    
            // Revisit
            //"complexity": ["warn", 8], // Interesting, research
            "@typescript-eslint/no-empty-function": "off", // Prevents dummies, which have their uses
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],
            "@typescript-eslint/no-var-requires": "off",
            "no-undef": "off", // Bug for false positive on interfaces right now. Will enable once fixed.
            "require-atomic-updates": "off"


          
            'no-alert': 'off',
            'no-multiple-empty-lines': [
                'warn',
                {
                    max: 1,
                },
            ],
            indent: [
                'warn',
                4,
                {
                    FunctionDeclaration: { parameters: 'first' },
                    FunctionExpression: { parameters: 'first' },
                    CallExpression: { arguments: 'first' },
                    SwitchCase: 1,
                },
            ],

            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'off',

            'vue/attribute-hyphenation': 'off',
            'vue/attributes-order': 'off',
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: ['VAttribute'],
                },
            ],

            'vue/html-self-closing': [
                'warn',
                {
                    html: {
                        void: 'never',
                        normal: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],

            'vue/max-attributes-per-line': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/no-expose-after-await': 'off',
            'vue/no-mutating-props': [
                'error',
                {
                    shallowOnly: true,
                },
            ],
            'vue/singleline-html-element-content-newline': 'off',
            'vue/v-on-event-hyphenation': 'off',
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always',
                    selfClosingTag: {
                        singleline: 'never',
                        multiline: 'always',
                    },
                },
            ],

            // Fix later
            // It is the unit tests import that is causing the issue
            'import/no-unresolved': 'off',

            'import/order': [
                'error',
                {
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    distinctGroup: false,
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                    ],
                    named: true,
                    'newlines-between': 'always',
                    pathGroups: [
                        {
                            // Minimatch pattern
                            pattern: '@lifecare-welfare/**',
                            // The predefined group this PathGroup is defined in relation to
                            group: 'external',
                            // How matching imports will be positioned relative to "group"
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'], // So that externals are not excluded
                },
            ],
        },
    },
    prettierConfig,
];
