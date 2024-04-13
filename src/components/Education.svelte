<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { itemSelected } from '../store/store';

	let element: HTMLElement;
	let intersecting: boolean;
	let innerWidth = 0;

	const changeItem = () => {
		itemSelected.update(() => 'Educación');
	};
</script>

<svelte:window bind:innerWidth />

<div class="h-screen flex flex-col justify-center items-center relative bg-blue-400">
	<div>Seccion de educacion</div>

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
			<span class="into-view inline-block text-2xl text-[#333646]" id="education" />
			<h2 bind:this={element} class=" text-3xl text-primary">Educacion</h2>
		</div>
	</IntersectionObserver>
</div>
