import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

interface Option {
	id: string;
	title: string;
	itemId: string;
}
export const options: Option[] = [
	{ id: nanoid(), title: 'Inicio', itemId: 'home' },
	{ id: nanoid(), title: 'Proyectos', itemId: 'projects' },
	// { id: nanoid(), title: 'Educación', itemId: 'education' },
	{ id: nanoid(), title: 'Habilidades', itemId: 'skills' }
];

export const itemSelected = writable<string>('Inicio');
