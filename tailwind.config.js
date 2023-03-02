/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.hbs", "./**/*.hbs"],
    safelist: [{
        pattern: /hljs+/,
    }],
    theme: {
        hljs: {
            theme: 'stackoverflow-dark',
        },
        extend: {
            typography: theme => ({
                dark: {
                    css: {
                        color: theme("colors.gray.400"),
                        '[class~="lead"]': { color: theme("colors.gray.500") },
                        a: { color: theme("colors.gray.100") },
                        strong: { color: theme("colors.gray.100") },
                        "ul > li::before": { backgroundColor: theme("colors.gray.700") },
                        hr: { borderColor: theme("colors.gray.800") },
                        blockquote: {
                            color: theme("colors.gray.300"),
                            borderLeftColor: theme("colors.gray.800"),
                        },
                        h1: { color: theme("colors.gray.100") },
                        h2: { color: theme("colors.gray.100") },
                        h3: { color: theme("colors.gray.100") },
                        h4: { color: theme("colors.gray.100") },
//                        pre: null,
//                        code: null,
//                        'code::before': null,
//                        'code::after': null,
//                        'pre code': null,
//                        'pre code::before': null,
//                        'pre code::after': null,
                        thead: {
                            color: theme("colors.gray.100"),
                            borderBottomColor: theme("colors.gray.700"),
                        },
                        "tbody tr": { borderBottomColor: theme("colors.gray.800") },
                    },
                },
                DEFAULT: { css: { pre: null, code: null, 'code::before': null, 'code::after': null, 'pre code': null, 'pre code::before': null, 'pre code::after': null } },
                sm: { css: { pre: null, code: null, 'code::before': null, 'code::after': null, 'pre code': null, 'pre code::before': null, 'pre code::after': null } },
                lg: { css: { pre: null, code: null, 'code::before': null, 'code::after': null, 'pre code': null, 'pre code::before': null, 'pre code::after': null } },
                xl: { css: { pre: null, code: null, 'code::before': null, 'code::after': null, 'pre code': null, 'pre code::before': null, 'pre code::after': null } },
                '2xl': { css: { pre: null, code: null, 'code::before': null, 'code::after': null, 'pre code': null, 'pre code::before': null, 'pre code::after': null } },
            }),
        },
    },
    variants: {
        marginBottom: ({ after }) => after(["last-of-type"]),
        extend: { typography: ["dark"] }
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-highlightjs'),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '600px',
                    },
                    '@screen md': {
                        maxWidth: '700px',
                    },
                    '@screen lg': {
                        maxWidth: '850px',
                    },
                    '@screen xl': {
                        maxWidth: '1080px',
                    },
                }
            })
        },
        function ({ addVariant, e }) {
            addVariant("last-of-type", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`last-of-type${separator}${className}`)}:last-of-type`;
                });
            });
        },
    ]
}
