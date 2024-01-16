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
		fontSize: {
			sm: 'clamp(0.8rem, calc(0.7rem + 3vw), 0.9rem)',
			base: 'clamp(1rem, calc(0.9rem + 3vw), 1.2rem)',
			xl: 'clamp(1.25rem, calc(1.1rem + 3vw), 1.5rem)',
			'2xl': 'clamp(1.563rem, calc(1.4rem + 3vw), 1.9rem)',
			'3xl': 'clamp(1.953rem, calc(1.8rem + 3vw), 2.4rem)',
			'4xl': 'clamp(2.441rem, calc(2.2rem + 3vw), 2.9rem)',
			'5xl': 'clamp(3.052rem, calc(2.9rem + 3vw), 3.2rem)',
			'6xl': 'clamp(4rem, calc(3.8rem + 3vw), 4.5rem)',
			'7xl': 'clamp(5rem, calc(4.8rem + 3vw), 5.5rem)',
			'9xl': 'clamp(7.052rem, calc(6.8rem + 3vw), 9rem)',
		},
		extend: {
			colors: {
				dark: {
					1: '#1A120B',
					gradient: 'radial-gradient(ellipse at 50% 100%, rgba(66, 48, 17, 1) 0%, rgba(30, 21, 7, 1) 64%, rgba(0, 0, 0, 1) 100%)'
				},
				neutral: '#3C2A21',
				light: '#D5CEA3',
				highlight: '#E5E5CB',
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
