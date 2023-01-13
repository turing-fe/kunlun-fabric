"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('@typescript-eslint/parser');
require('@typescript-eslint/eslint-plugin');
require('eslint-import-resolver-typescript');
/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');
var OFF = 0;
var WARNING = 1;
var ERROR = 2;
var eslintConfig = {
    root: true,
    parser: '@babel/eslint-parser',
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es2022: true,
        worker: true,
        jest: true,
        mocha: true,
        jasmine: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true
        },
        babelOptions: {
            presets: [require.resolve('@babel/preset-react')]
        }
    },
    ignorePatterns: ['node_modules/*'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: {
                'react': {
                    version: 'detect'
                },
                'import/ignore': ['node_modules', '\\.(css|md|svg|json)$'],
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
                },
                'import/resolver': {
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx']
                    },
                    typescript: {
                        alwaysTryTypes: true
                    }
                },
                'eslint-import-resolver-typescript': {
                    alwaysTryTypes: true
                }
            },
            // https://eslint.org/docs/latest/user-guide/configuring/language-options
            env: {
                browser: true,
                node: true,
                commonjs: true,
                es2022: true,
                worker: true,
                jest: true,
                mocha: true,
                jasmine: true
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                // 'plugin:node/recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:jsx-a11y/recommended',
                /**
                 * or use plugins: ['jest', 'jest-dom', 'testing-library']
                 */
                'plugin:jest/recommended',
                'plugin:jest-dom/recommended',
                'plugin:testing-library/react',
                'plugin:cypress/recommended',
                // 'plugin:mdx/recommended',
                'plugin:regexp/recommended',
                'plugin:prettier/recommended'
            ],
            plugins: ['unused-imports', /* 'prefer-let', */ 'tailwindcss'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                    // patterns: []
                    }
                ],
                // 'linebreak-style': ['error', 'unix'],
                // 'prefer-let/prefer-let': WARNING,
                // import 排序
                'import/default': OFF,
                'import/no-named-as-default': OFF,
                'import/no-named-as-default-member': OFF,
                'import/no-unresolved': ERROR,
                'import/order': [
                    'error',
                    {
                        // or groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object']
                        groups: [
                            'builtin',
                            'external',
                            'internal',
                            'parent',
                            'sibling',
                            'index',
                            'object'
                            // 'type'
                        ],
                        // 'newlines-between': 'always',
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: true
                        },
                        pathGroups: [
                            // always put css import to the last, ref:
                            // https://github.com/import-js/eslint-plugin-import/issues/1239
                            {
                                pattern: '*.+(css|sass|less|scss|pcss|styl)',
                                group: 'unknown',
                                patternOptions: { matchBase: true },
                                position: 'after'
                            },
                            {
                                pattern: '@jest/globals',
                                group: 'builtin',
                                position: 'before'
                            },
                            { pattern: 'react', group: 'builtin', position: 'before' },
                            { pattern: 'fs-extra', group: 'builtin' },
                            { pattern: 'lodash', group: 'external', position: 'before' },
                            { pattern: 'clsx', group: 'external', position: 'before' },
                            {
                                pattern: '@/**',
                                group: 'internal'
                            }
                        ],
                        pathGroupsExcludedImportTypes: [],
                        // see more: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#warnonunassignedimports-truefalse
                        warnOnUnassignedImports: true
                    }
                ],
                '@typescript-eslint/ban-types': [OFF],
                '@typescript-eslint/ban-ts-comment': [OFF],
                '@typescript-eslint/consistent-type-imports': 1,
                '@typescript-eslint/explicit-function-return-type': [OFF],
                '@typescript-eslint/explicit-module-boundary-types': [OFF],
                '@typescript-eslint/no-unused-vars': [OFF],
                '@typescript-eslint/no-var-requires': [OFF],
                '@typescript-eslint/no-explicit-any': [OFF],
                '@typescript-eslint/no-empty-function': [OFF],
                '@typescript-eslint/no-empty-interface': [OFF],
                '@typescript-eslint/no-non-null-assertion': [OFF],
                // /// <reference types="react" />
                // '@typescript-eslint/triple-slash-reference': [OFF],
                '@typescript-eslint/no-non-null-asserted-optional-chain': OFF,
                '@typescript-eslint/require-await': OFF,
                'unused-imports/no-unused-imports': 'warn',
                'react/react-in-jsx-scope': OFF,
                'react/no-unescaped-entities': OFF,
                // Sometimes we do need the props as a whole, e.g. when spreading
                'react/destructuring-assignment': OFF,
                'react/function-component-definition': [
                    WARNING,
                    {
                        namedComponents: 'function-declaration',
                        unnamedComponents: 'arrow-function'
                    }
                ],
                'react/jsx-filename-extension': OFF,
                'react/jsx-key': [ERROR, { checkFragmentShorthand: true }],
                'react/jsx-no-useless-fragment': [ERROR, { allowExpressions: true }],
                'react/jsx-props-no-spreading': OFF,
                'react/no-array-index-key': OFF,
                'react/no-unstable-nested-components': [
                    WARNING,
                    { allowAsProps: true }
                ],
                'react/prefer-stateless-function': WARNING,
                'react/prop-types': OFF,
                'react/require-default-props': [
                    ERROR,
                    { ignoreFunctionalComponents: true }
                ],
                'react-hooks/rules-of-hooks': ERROR,
                'react-hooks/exhaustive-deps': WARNING,
                'jsx-a11y/aria-role': [OFF],
                'jsx-a11y/anchor-is-valid': OFF,
                'jsx-a11y/html-has-lang': OFF,
                'jsx-a11y/no-autofocus': OFF,
                'jsx-a11y/no-redundant-roles': OFF,
                'jsx-a11y/click-events-have-key-events': OFF,
                'jsx-a11y/no-static-element-interactions': OFF,
                'jsx-a11y/no-noninteractive-element-interactions': OFF,
                'jest/consistent-test-it': WARNING,
                'jest/expect-expect': OFF,
                'jest/no-disabled-tests': OFF,
                'jest/no-large-snapshots': [
                    WARNING,
                    { maxSize: Infinity, inlineMaxSize: 10 }
                ],
                'jest/no-test-return-statement': ERROR,
                'jest/prefer-expect-resolves': WARNING,
                'jest/prefer-lowercase-title': [WARNING, { ignore: ['describe'] }],
                'jest/prefer-spy-on': WARNING,
                'jest/prefer-to-be': WARNING,
                'jest/prefer-to-have-length': WARNING,
                'jest/require-top-level-describe': ERROR,
                'jest/valid-title': [
                    ERROR,
                    {
                        mustNotMatch: {
                            it: [
                                '^should|\\.$',
                                'Titles should not begin with "should" or end with a full-stop'
                            ]
                        }
                    }
                ],
                'jest/no-deprecated-functions': OFF,
                // use Prettier format rule
                'prettier/prettier': ['error', {}, { usePrettierrc: true }]
            }
        },
        {
            files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
            env: {
                jest: true,
                mocha: true,
                jasmine: true
            }
        },
        {
            // all code blocks in .md files
            files: ['**/*.md/*.js?(x)', '**/*.md/*.ts?(x)'],
            rules: {
                'no-unreachable': OFF,
                'no-unused-expressions': OFF,
                'no-unused-labels': OFF,
                'no-unused-vars': OFF,
                'jsx-a11y/alt-text': OFF,
                'jsx-a11y/anchor-has-content': OFF,
                // 'prefer-let/prefer-let': OFF,
                'react/jsx-no-comment-textnodes': OFF,
                'react/jsx-no-undef': OFF
            }
        },
        {
            // all ```ts & ```tsx code blocks in .md files
            files: ['**/*.md/*.ts?(x)'],
            rules: {
                '@typescript-eslint/no-unused-expressions': OFF,
                '@typescript-eslint/no-unused-vars': OFF
            }
        },
        {
            files: ['packages/**/*.*'],
            excludedFiles: '**/__tests__/**/*.*',
            rules: {
                // Validate dependencies are listed in workspace package.json files
                'import/no-extraneous-dependencies': ERROR
            }
        },
        {
            files: ['**/*.stories.*'],
            rules: {
                'import/no-anonymous-default-export': 'off'
            }
        }
    ]
};
module.exports = eslintConfig;
