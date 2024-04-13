import type { ComponentType, SvelteComponent } from 'svelte';
import ReactIcon from '../components/icons/react.svelte';
import JsIcon from '../components/icons/javascript.svelte';
import TsIcon from '../components/icons/typescript.svelte';
import SupabaseIcon from '../components/icons/supabase.svelte';
import SassIcon from '../components/icons/sass.svelte';
import ChakraIcon from '../components/icons/chakra.svelte';
import NextIcon from '../components/icons/next.svelte';
import TailwindIcon from '../components/icons/tailwind.svelte';

export interface ProjectType {
	title: string;
	description: string;
	stack: ComponentType<SvelteComponent<{ size: number }>>[];
	links: {
		liveDemo: string;
		githubRepo: string;
	};
	image: string;
}

export const projects: ProjectType[] = [
	{
		title: 'E-commerce - SimpleLife',
		description:
			'Una app responsive, selecciona distintas categorías, agrega al carrito, realiza busca de productos, ademas una experiencia de compra eficiente.',
		stack: [ReactIcon, JsIcon, SassIcon],
		links: {
			liveDemo: 'https://ecommerce-app-cecc9.vercel.app/',
			githubRepo: 'https://github.com/cecc9/ecommerce-app'
		},
		image: '/ecommerce.png'
	},
	{
		title: 'WeatherApp - SimpleLife',
		description:
			'Una app responsive, donde los usuarios pueden obtener información detallada sobre el clima en cualquier ubicación, utilice la API de OpenWeatherMap.',
		stack: [ReactIcon, TsIcon, ChakraIcon],
		links: {
			liveDemo: 'https://weather-pearl-five.vercel.app/',
			githubRepo: 'https://github.com/cecc9/weather-app'
		},
		image: '/weather.png'
	},
	{
		title: 'Authentication - SimpleLife',
		description:
			' Un sistema de autenticación que permite a los usuarios registrarse e iniciar sesión con proveedores y gestionar sus cuentas de manera segura.',
		stack: [ReactIcon, TsIcon, NextIcon, TailwindIcon, SupabaseIcon],
		links: {
			liveDemo: 'https://authentication-system-cecc9.vercel.app/',
			githubRepo: 'https://github.com/cecc9/authentication-system'
		},
		image: '/autenticacion.png'
	},
	{
		title: 'Quiz App JavaScript',
		description:
			'Una aplicación de cuestionario sobre JS. Permite a los usuarios responder preguntas y recibir las respuestas y obtener una puntuación al final.',
		stack: [ReactIcon, TsIcon, ChakraIcon],
		links: {
			liveDemo: 'https://quiz-app-cecc9.vercel.app/',
			githubRepo: 'https://github.com/cecc9/quiz-app'
		},
		image: '/quiz-app.png'
	}
];
