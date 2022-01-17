const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: [...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		extend: {
			colors: {
				grue: '#647790',
				'slate-650': '#3c4a5d',
				blurple: '#5C5FFF',
				darkbg: '#0a0a0a'
			}
		}
	}
};
