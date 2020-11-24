const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
    ],
    darkMode: 'class', // or 'media' or false
    theme: {
        colors: {
            primary: {
                50: '#f5faff',
                100: '#e7f3ff',
                200: '#C9E1F8',
                300: '#9BC8F3',
                400: '#6EB0ED',
                500: '#4097E7',
                600: '#1B7EDA',
                700: '#1563AC',
                800: '#10497F',
                900: '#0A2F52'
            },
            secondary: {
                50: '#fffae5',
                100: '#fff1b7',
                200: '#ffe889',
                300: '#ffde5c',
                400: '#ffd52e',
                500: '#ffcc00',
                600: '#d3a800',
                700: '#a68500',
                800: '#7a6100',
                900: '#4d3d00',
            },
            black: "#111",
            gray: colors.blueGray,
            white: colors.white,
            transparent: 'transparent',
            current: 'currentColor'
        },
        fontFamily: {
            sans: [
                'Poppins',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            title: [
                '"Josefin Sans"'
            ]
        },
        fontWeight: {
            light: '300',
            normal: '400',
            semibold: '600',
            bold: '700',
            extrabold: '800'
        },
        padding: (theme) => ({
            ...theme('height')
        }),
        extend: {
            zIndex: {
                '-1': '-1',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9'
            },
            strokeWidth: {
                4: '4',
                6: '6',
                8: '8'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
