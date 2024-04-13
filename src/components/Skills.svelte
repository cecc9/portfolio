<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { itemSelected } from '../store/store';
	import { skillsTechnologies, skillsTools } from '../lib/skills';

	let element: HTMLElement;
	let intersecting: boolean;
	let innerWidth = 0;
	// $: console.log('innerWidth', innerWidth);

	const changeItem = () => {
		itemSelected.update(() => 'Habilidades');
	};
</script>

<svelte:window bind:innerWidth />

<div class="text-gray-400 h-screen flex flex-col items-start">
	<IntersectionObserver
		{element}
		bind:intersecting
		on:intersect={(e) => {
			console.log(e);
			if (e.detail.isIntersecting) {
				console.log('quefueeeeeee');
				changeItem();
			}
		}}
	>
		<div>
			<span class="into-view inline-block" id="skills" />

			<!-- <h2 bind:this={element} class="into-view text-3xl text-blue-600 mt-6" id="skills">habilidades</h2> -->
			<h2 bind:this={element} class="text-3xl text-primary">Mis Habilidades</h2>
		</div>
	</IntersectionObserver>

	<div class="flex flex-1 flex-col p-2 w-full justify-center gap-10">
		<h2 class="text-3xl pt-6 px-6 text-[#057dcd] font-bold text-center">Mis Habilidades</h2>

		<div class="flex flex-col gap-4 items-center justify-center mb-7">
			<h3 class={`${innerWidth < 470 ? 'text-xl' : 'text-2xl'} text-gray-100 font-semibold`}>
				Tecnologias de desarrollo web
			</h3>
			<ul class="flex flex-row flex-wrap gap-6 items-center justify-center">
				{#each skillsTechnologies as technology}
					<li class="flex flex-col gap-2 items-center">
						<svelte:component this={technology.icon} size={innerWidth < 470 ? 40 : 80} />
						<p class={`${innerWidth < 470 ? 'text-base' : 'text-xl'} font-medium`}>
							{technology.title}
						</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col gap-4 items-center justify-center">
			<h3 class={`${innerWidth < 470 ? 'text-xl' : 'text-2xl'} text-gray-100 font-semibold`}>
				Herramientas de desarrollo
			</h3>
			<ul class="flex flex-row flex-wrap gap-6 items-center justify-center">
				{#each skillsTools as tool}
					<div class="flex flex-col gap-2 items-center">
						<svelte:component this={tool.icon} size={innerWidth < 470 ? 40 : 80} />
						<p class={`${innerWidth < 470 ? 'text-base' : 'text-xl'} font-medium`}>
							{tool.title}
						</p>
					</div>
				{/each}
			</ul>
		</div>
	</div>
</div>
