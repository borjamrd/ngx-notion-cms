// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(
    ...rootConfig,
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'ngx',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'ngx',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        rules: {
            "@angular-eslint/template/click-events-have-key-events": [
                "warn"
            ],
            "@angular-eslint/template/interactive-supports-focus": [
                "warn"
            ],
            "@angular-eslint/template/eqeqeq": ["warn"],
            "@typescript-eslint/no-explicit-any": [
                "warn",
                {
                    "ignoreRestArgs": true
                }
            ],
        }
    }
);
