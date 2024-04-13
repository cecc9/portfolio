<script lang="ts">
	import { onMount } from 'svelte';

	let container: Element;

	onMount(() => {
		// console.log('element: ', container);
		const el = document.querySelector('.pro');

		const observer = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					console.log('isIntersecting', e);
				}
			},
			{ threshold: 0 }
		);
		observer.observe(el as Element);

		return () => {
			observer.disconnect();
			console.log('desconectando');
		};
	});
</script>

<div bind:this={container}>
	<slot />
</div>
