/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#333646',
				secondary: '#252734',

				'text-primary': '#ffffff',
				'text-secondary': '#666874'
			},
			screens: {
				xs: { max: '550px' },
				sm: { max: '619px' }, // Para pantallas más pequeñas
				md: { max: '767px' }, // Para pantallas medianas
				lg: { max: '1024px' }, // Para pantallas grandes
				xl: { max: '1279px' } // Para pantallas extra grandes
			}
		}
	},
	plugins: []
};
