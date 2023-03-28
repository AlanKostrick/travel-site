const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                title: ['Inter', ...defaultTheme.fontFamily.sans],
                text: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1d5171',
                secondary: '#236e95',
                three: '#B69196',
                four: '#D48960',
                light: '#E6E9E5',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
