/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    extend: {
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
            young: ['Young Serif', 'serif'],
        },
    },
};
export const plugins = [];