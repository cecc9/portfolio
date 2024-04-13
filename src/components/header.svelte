<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Menu from './icons/menu.svelte';
	import Navbar from './navbar.svelte';

	let isActive: boolean = false;

	const clickMenu = () => {
		isActive = !isActive;
	};
</script>

<header class="header_fixed max-w-[1024px] flex justify-between items-center flex-wrap p-4">
	<div class="md:w-full flex justify-between">
		<figure>
			<img class="h-[90px]" src="logo2.png" alt="logo" />
		</figure>

		<button class="hidden md:block" on:click={clickMenu}>
			<Menu size={40} />
		</button>
	</div>

	<div class="md:hidden">
		<Navbar className="flex-row" />
	</div>

	{#if isActive}
		<div
			transition:slide={{ delay: 0, duration: 700, easing: cubicOut }}
			class={`active bg-[#252734] text-white hidden md:flex items-center justify-center w-full p-4 `}
		>
			<Navbar className="flex-col" />
		</div>
	{/if}
</header>

<style lang="scss">
	.header_fixed {
		// width: inherit;
		position: fixed;
		background-color: rgba(51, 54, 70, 0.8);
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 100;
	}

	.active {
		height: 350px;
	}
</style>
