/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./projects/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                light: {
                    primary: '#1d4ed8',
                    secondary: '#86198f',
                    secondaryLight: '#86198f',
                    background: '#ffffff',
                    foreground: '#000000',
                    accent: '#f59e0b',
                    muted: '#f3f4f6',
                },
                dark: {
                    primary: '#3b82f6',
                    secondary: 'rgb(134 25 143)',
                    secondaryLight: '#f0abfc',
                    background: '#0F0F11',
                    foreground: '#ffffff',
                    accent: '#d97706',
                    muted: '#374151',
                },
            },
        },
    },
    plugins: [],
};
