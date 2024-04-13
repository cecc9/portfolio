<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { itemSelected } from '../store/store';

	import Github from './icons/github.svelte';
	import Twitter from './icons/twitter.svelte';
	import Linkedin from './icons/linkedin.svelte';

	import Carousel from './carousel.svelte';

	let element: HTMLElement;
	let intersecting: boolean;

	const changeItem = () => {
		itemSelected.update(() => 'Inicio');
	};
</script>

<div class="h-[100vh] flex flex-col justify-center items-center relative">
	<!-- md:h-auto md:py-32 -->
	<IntersectionObserver
		{element}
		bind:intersecting
		on:intersect={(e) => {
			if (e.detail.isIntersecting) {
				changeItem();
			}
		}}
	>
		<div class="absolute top-0">
			<span class="into-view inline-block text-blue-600" id="home" />
			<h1 bind:this={element} class="text-primary text-2xl self-center">content</h1>
		</div>
	</IntersectionObserver>

	<div class=" flex gap-10 items-center md:flex-col md:p-4">
		<div class="flex flex-col md:items-center flex-1 gap-[100px] md:gap-[30px]">
			<h1 class="text-7xl md:text-5xl md:text-center text-[#ebebec] font-semibold">
				Cristian <span class="text-8xl md:text-6xl">Choque.</span>
			</h1>

			<div class="flex gap-5">
				<a href="https://github.com/cecc9" target="_blank" class="text-[#057dcd] text-lg">
					<Github size={50} />
				</a>
				<!-- <a href="https://twitter.com/cecc35" target="_blank" class="text-[#057dcd] text-lg">
					<Twitter />
				</a> -->
				<a
					href="https://www.linkedin.com/in/cristian-choque/"
					target="_blank"
					class="text-[#057dcd] text-lg"
				>
					<Linkedin />
				</a>
			</div>
		</div>

		<div class="flex-1 flex flex-col gap-10 md:gap-7">
			<h2 class="text-[#057dcd] text-5xl md:text-4xl font-semibold md:text-center">
				Frontend Developer
			</h2>
			<div
				class="flex flex-col gap-2 text-[#ebebec] text-[22px] md:text-[20px] md:text-center font-light"
			>
				<p class="">
					Apasionado desarrollador Frontend con un enfoque creativo y soluciones técnicas
					innovadoras.
				</p>
				<p class="">
					Implemento librerías, frameworks, ademas de metodologías y buenas practicas web
					actualizadas, para mejorar continuamente mis habilidades.
					<!-- Apoyo mis proyectos con un profundo conocimiento de frameworks modernos y buenas prácticas
					de desarrollo web, buscando constantemente mejorar y adaptar mis habilidades. -->
				</p>
			</div>
		</div>
	</div>
</div>

<!-- <Carousel /> -->

<style lang="scss">
	// .parr {
	// 	@apply bg-red-500 text-2xl rounded text-gray-700;
	// }
</style>
