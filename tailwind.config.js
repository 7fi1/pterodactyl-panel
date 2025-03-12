const colors = require('tailwindcss/colors');
const gray = {
    50: 'hsl(216, 33%, 97%)',
    100: 'hsl(214, 15%, 91%)',
    150: 'hsl(212, 15%, 87%)',
    200: 'hsl(210, 16%, 82%)',
    250: 'hsl(211, 14%, 74%)',
    300: 'hsl(211, 13%, 65%)',
    350: 'hsl(211, 12%, 59%)',
    400: 'hsl(211, 10%, 53%)',
    450: 'hsl(219, 15%, 48%)',
    500: 'hsl(227, 21%, 42%)',
    550: 'hsl(228, 37%, 29%)',
    600: 'hsl(228, 54%, 15%)',
    650: 'hsl(229, 52%, 16%)',
    700: 'hsl(229, 49%, 17%)',
    750: 'hsl(229, 60%, 13%)',
    800: 'hsl(229, 70%, 9%)',
    850: 'hsl(228, 68%, 8%)',
    900: 'hsl(228, 66%, 9%)',
    950: 'hsl(228, 66%, 6%)'
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
