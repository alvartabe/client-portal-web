/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            scale: {
                175: '1.75',
                200: '2.00',
                225: '2.25',
                250: '2.50'
            },
        },
    },
    plugins: [],
};
