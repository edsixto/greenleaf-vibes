
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				vegan: {
					50: '#f0f9f4',
					100: '#daf0e3',
					200: '#b8e0ca',
					300: '#89c9a8',
					400: '#56ab82',
					500: '#3b8c6e',
					600: '#2b7057',
					700: '#245b48',
					800: '#1f483a',
					900: '#1c3c32',
					950: '#0a211b',
				},
				sky: {
					50: '#f0f7fe',
					100: '#dfedfd',
					200: '#c7e0fc',
					300: '#a3cdf9',
					400: '#79b3f5',
					500: '#5995ef',
					600: '#3f75e4',
					700: '#3260d2',
					800: '#2a4b7c',
					900: '#274174',
					950: '#172544',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
          			'0%': {
            			opacity: '0',
            			transform: 'translateY(10px)'
          			},
          			'100%': {
            			opacity: '1',
            			transform: 'translateY(0)'
          			}
        		},
				countdown: {
          			'0%': { opacity: '1' },
          			'50%': { opacity: '0.8' },
          			'100%': { opacity: '1' }
        		}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'countdown-pulse': 'countdown 2s ease-in-out infinite'
			},
			fontFamily: {
        		'poppins': ['Poppins', 'sans-serif'],
      		},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
