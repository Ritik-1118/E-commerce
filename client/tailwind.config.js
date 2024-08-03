/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            nav: "#070a34",
            MaroonFlush: "#b42044",
            1: ""
        },
    },
    plugins: [
        function ( { addUtilities } ) {
            addUtilities( {
                '.scrollbar-hide': {
                    /* Firefox */
                    'scrollbar-width': 'none',
                    /* Internet Explorer 10+ */
                    '-ms-overflow-style': 'none',
                    /* WebKit */
                    '&::-webkit-scrollbar': {
                        width: '0px',
                        height: '0px',
                    },
                },
            } );
        },
    ],
}