import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/lib/esm/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				dark: '#020100',
				neutral: '#3E3C65',
				light: '#FDFFFC',
				highlight: '#00C6C0',
				spot: '#D5E9E8',
			},
			backgroundImage: {
				'dark-gradient': 'radial-gradient(ellipse at 100% 100%, #142344 0%, #020100 70%)',
				'neutral-gradient': 'radial-gradient(ellipse at 50% 50%, #191832 55%, #3E3C65 100%)',
				'light-gradient': 'radial-gradient(ellipse at 0% 100%, #856682 30%, #FDFFFC 90%)',
				'highlight-gradient': 'radial-gradient(ellipse at 89% 0%, #11d7d1 10%, #00C6C0 50%)',
				'spot-gradient': 'radial-gradient(ellipse at 0% 0%, #b2c7c6 0%, #D5E9E8 90%)',
			},
			keyframes: {
				click: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.9)' }
				}
			},
			animation: {
				click: 'click 150ms ease-in-out'
			}
		},
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')],
};
export default config;
