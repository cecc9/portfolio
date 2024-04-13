<script lang="ts">
	import React from './icons/react.svelte';
	import Js from './icons/javascript.svelte';
	import Sass from './icons/sass.svelte';
	import Github from './icons/github.svelte';
	import Live from './icons/live.svelte';
	import type { ProjectType } from '$lib/projects';
	import Header from './header.svelte';
	import Chakra from './icons/chakra.svelte';
	import Next from './icons/next.svelte';

	export let projectItem: ProjectType;
</script>

<div class="m-1">
	<div
		class="w-[310px] h-[358px] flex flex-col justify-between xs:w-full bg-[#424657] p-2 rounded-lg"
	>
		<figure class="w-full h-[150px]">
			<img src={projectItem.image} class="w-full h-full object-contain" alt="" />
		</figure>
		<div class="p-2 flex flex-col gap-2">
			<h2 class="text-xl font-semibold">{projectItem.title}</h2>
			<p class="text-base font-light">
				{projectItem.description}
			</p>
			<div class="flex justify-between items-center">
				<div class="flex items-center gap-2">
					{#each projectItem.stack as stack}
						{#if stack === Chakra}
							<svelte:component this={stack} size={25} />
						{:else if stack === Next}
							<svelte:component this={stack} size={25} />
						{:else}
							<svelte:component this={stack} size={30} />
						{/if}
					{/each}

					<!-- <React size={30} />
					<Js size={30} />
					<Sass size={30} /> -->
				</div>
				<div>
					<button
						on:click={() => window.open(projectItem.links.liveDemo, '_blank')}
						title="live demo"
						class="text-blue-400 hover:text-blue-500"
					>
						<Live size={30} />
					</button>
					<button
						on:click={() => window.open(projectItem.links.githubRepo, '_blank')}
						title="repo github"
						class="text-blue-400 hover:text-blue-500"
					>
						<Github size={30} />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
