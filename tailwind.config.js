/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
	theme: {
		fontFamily: {
			display: ['Poppins', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.75rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		extend: {
			spacing: {
				7: '1.75rem',
				9: '2.25rem',
				11: '2.75rem',
				13: '3.25rem',
				14: '3.5rem',
				15: '3.75rem',
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
			colors: {
				'primary-pink': '#FF52BF',
				'very-pale-cyan': '#EBFBFF',
				'very-dark-cyan': '#00252E',
				'grayish-blue': '#808D99',
			},
		},
	},
	variants: {},
	plugins: [],
};
