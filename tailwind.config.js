/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            colors: {
                'pastel-red': '#FFB7B2',
                'pastel-green': '#B5EAD7',
                'pastel-blue': '#C7CEEA',
                'pastel-yellow': '#FFF2CC',
            }
        },
    },
    plugins: [],
}
