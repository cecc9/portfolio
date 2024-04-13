import type { ComponentType, SvelteComponent } from 'svelte';
import Css from '../components/icons/css.svelte';
import Javascript from '../components/icons/javascript.svelte';
import Next from '../components/icons/next.svelte';
import React from '../components/icons/react.svelte';
import Tailwind from '../components/icons/tailwind.svelte';
import Typescript from '../components/icons/typescript.svelte';
import Html from '../components/icons/html.svelte';
import Node from '../components/icons/node.svelte';
import Svelte from '../components/icons/svelte.svelte';
import Chakra from '../components/icons/chakra.svelte';
import Github from '../components/icons/github.svelte';
import Git from '../components/icons/git.svelte';
import Vsc from '../components/icons/vsc.svelte';
import Docker from '../components/icons/docker.svelte';
import Insomnia from '../components/icons/insomnia.svelte';
import Supabase from '../components/icons/supabase.svelte';
import Expo from '../components/icons/expo.svelte';

export interface SkillType {
	title: string;
	icon: ComponentType<SvelteComponent>;
}

export const skillsTechnologies: SkillType[] = [
	{ title: 'HTML', icon: Html },
	{ title: 'CSS', icon: Css },
	{ title: 'Javascript', icon: Javascript },
	{ title: 'Typescript', icon: Typescript },
	{ title: 'React', icon: React },
	{ title: 'NextJS', icon: Next },
	{ title: 'ChakraUI', icon: Chakra },
	{ title: 'Tailwind', icon: Tailwind },
	{ title: 'Svelte', icon: Svelte },
	{ title: 'Node', icon: Node },
	{ title: 'Expo', icon: Expo },
	{ title: 'Supabase', icon: Supabase }
];

export const skillsTools: SkillType[] = [
	{ title: 'Git', icon: Git },
	{ title: 'Github', icon: Github },
	{ title: 'VSCode', icon: Vsc },
	{ title: 'Docker', icon: Docker },
	{ title: 'Insomnia', icon: Insomnia }
];
