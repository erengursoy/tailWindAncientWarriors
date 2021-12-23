module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '4px 10px 30px 5px rgb(120 84 16)',
                '2xl': '-18px 20px 16px 7px rgb(215 215 215 / 89%)',
            },
            backgroundImage: {
                'quote': "url('~/assets/images/head.png')",
                'background': "url('~/assets/images/head.png')"

            },

        },
    },
    plugins: [],
}