const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		extend: {
			colors: {
				salmon: '#FF5757',
				grue: '#647790',
				'slate-650': '#3c4a5d'
			}
		}
	}
};
