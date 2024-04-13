<script lang="ts">
	import { Swipe, SwipeItem } from 'svelte-swipe';
	import type { ProjectType } from '../lib/projects';
	import ProjectCard from '../components/ProjectCard.svelte';

	export let projects: ProjectType[];

	const swipeConfig = {
		autoplay: false,
		delay: 4000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};

	// let innerWidth = 0;
</script>

<!-- <svelte:window bind:innerWidth /> -->

<div class="swipe-holder">
	<Swipe {...swipeConfig}>
		<!-- <SwipeItem>
			<div class="bg-red-500">item 1</div>
		</SwipeItem>

		<SwipeItem>
			<div class="bg-blue-400">item 2</div>
		</SwipeItem> -->

		{#each projects as project}
			<SwipeItem>
				<ProjectCard projectItem={project} />
			</SwipeItem>
		{/each}
	</Swipe>
</div>

<style>
	.swipe-holder {
		/* height: 30vh; */
		height: 368px;
		width: 100%;
	}
</style>
