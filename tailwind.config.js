/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#345EAA', // Match logo secondary blue
                    light: '#3A8CCB', // Match logo light blue
                    dark: '#28396C', // Match logo deep blue
                },
                secondary: {
                    DEFAULT: '#6ABD5C', // Match logo primary green
                    light: '#A1E593', // Lighter green
                    dark: '#4A9C3E', // Darker green
                },
                accent: '#3A8CCB',

            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.75rem', // rounded-xl by default for some components if needed
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
