import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					1: '#020100',
					gradient: 'radial-gradient(ellipse at 100% 100%, #142344 0%, #020100 70%)'
				},
				neutral: '#235789',
				light: '#FDFFFC',
				highlight: '#F1D302',
				spot: '#ED1C24' 
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
	plugins: [nextui()],
};
export default config;
