/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "media",
    content: ["../index.html", "../app.js"],
    theme: {
        extend: {
            screens: {
                "min-1860": "1860px",
            },
        },
        colors: {
            text: "hsl(var(--text))",
            background: "hsl(var(--background))",
            primary: "hsl(var(--primary))",
            secondary: "hsl(var(--secondary))",
            accent: "hsl(var(--accent))",
        },
    },
    plugins: [],
};
