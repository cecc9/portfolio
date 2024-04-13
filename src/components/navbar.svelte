<script lang="ts">
	import { onMount } from 'svelte';
	import { itemSelected, options } from '../store/store';

	export let className: string;

	let sectionsPages: Element[];

	onMount(() => {
		sectionsPages = [...document.querySelectorAll('.into-view')];
	});

	const handleScrollIntoView = (e: MouseEvent) => {
		const buttonElement = e.currentTarget as HTMLButtonElement;
		const elementToIntoView = sectionsPages.find((section) => section.id === buttonElement.id);
		elementToIntoView?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
	};
</script>

<nav class={`flex gap-5 ${className}`}>
	{#each options as item (item.id)}
		<button class="p_container" id={item.itemId} on:click={handleScrollIntoView}>
			<p
				class="{item.title === $itemSelected
					? 'text-text-primary'
					: 'text-text-secondary'} text-[20px] font-semibold tracking-[1px] mb-1"
			>
				{item.title}
			</p>
			<span class={item.title === $itemSelected ? 'p_span' : ''} />
		</button>
	{/each}
</nav>

<style lang="scss">
	.p_container {
		position: relative;
		cursor: pointer;
	}

	.p_span {
		width: 100%;
		position: relative;

		display: flex;
		justify-content: center;

		&::after {
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #ffc25c;
			content: '';
		}
	}
</style>
