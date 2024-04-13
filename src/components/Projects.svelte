<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { itemSelected } from '../store/store';
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/projects';
	import Carousel from './carousel.svelte';

	let element: HTMLElement;
	let intersecting: boolean;

	let innerWidth = 0;
	// $: console.log(innerWidth);

	const changeItem = () => {
		itemSelected.update(() => 'Proyectos');
	};
</script>

<svelte:window bind:innerWidth />

<div class="h-screen flex flex-col justify-center items-center relative">
	<IntersectionObserver
		{element}
		bind:intersecting
		on:intersect={(e) => {
			if (e.detail.isIntersecting) {
				changeItem();
			}
		}}
	>
		<div class="absolute top-0 text-center">
			<span class="into-view inline-block text-2xl text-[#333646]" id="projects">into-view</span>
			<h2 bind:this={element} class=" text-3xl text-primary">Proyectos Personales</h2>
		</div>
	</IntersectionObserver>
	<div class="text-gray-200 flex flex-col gap-5">
		<h2 class="text-3xl pt-6 px-6 text-[#057dcd] text-center font-bold">
			Mis Proyectos Personales
		</h2>
		<div class="flex gap-3 flex-wrap justify-center">
			{#if innerWidth < 768}
				<Carousel {projects} />
			{:else}
				{#each projects as project}
					<ProjectCard projectItem={project} />
				{/each}
			{/if}
		</div>
	</div>

	<!-- <Carousel /> -->
</div>

<style lang="scss">
	/* your styles go here */
</style>
