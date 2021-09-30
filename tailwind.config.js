module.exports = {
    purge: [
        "./public/**/*.html",
        "./public/**/*.js"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: '#000',
            red: {
                500: '#dc2626',
                400: '#b91c1c'
            },
        },
        extend: {
            colors: {
                blue: '#1e40af',
                gray: {
                    500: "#6b7280",
                    400: "#4b5563"
                }
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}