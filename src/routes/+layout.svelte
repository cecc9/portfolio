<script lang="ts">
	import '../styles/globals.css';

	import Header from '../components/header.svelte';
</script>

<main class="bg-primary flex w-full justify-center">
	<div class="max-w-[1024px] w-[1024px]">
		<Header />
		<slot />
	</div>
</main>
