// eslint.config.js
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

// Helper to add files restriction to each config object
const withFiles = (configs, files) =>
    configs.map((config) => ({
        ...config,
        files,
    }));

module.exports = tseslint.config(
    // TypeScript files
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
    },
    ...withFiles([eslint.configs.recommended], ['**/*.ts']),
    ...withFiles(tseslint.configs.recommended, ['**/*.ts']),
    ...withFiles(tseslint.configs.stylistic, ['**/*.ts']),
    ...withFiles(angular.configs.tsRecommended, ['**/*.ts']),
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        processor: angular.processInlineTemplates,
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                { type: 'attribute', prefix: 'lib', style: 'camelCase' },
            ],
            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: 'lib', style: 'kebab-case' },
            ],
        },
    },
    // HTML templates
    ...withFiles(angular.configs.templateRecommended, ['**/*.html']),
    ...withFiles(angular.configs.templateAccessibility, ['**/*.html']),
    {
        files: ['**/*.html'],
        rules: {
            '@angular-eslint/template/click-events-have-key-events': ['warn'],
            '@angular-eslint/template/interactive-supports-focus': ['warn'],
            '@angular-eslint/template/eqeqeq': ['warn'],
        },
    }
);
