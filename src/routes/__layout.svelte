<script>
	import { text } from 'svelte/internal';
	let active;
</script>

<div class="min-h-screen">
	<nav class="flex px-3 py-3 gap-6">
		<a
			href="/"
			class={`text-lg font-serif text-gray-600 ${
				active === 'about' ? 'font-semibold text-gray-900' : ''
			}`}
			on:click={() => (active = 'about')}>About</a
		>
		<a
			href="/projects"
			class={`text-lg font-serif text-gray-600 ${
				active === 'projects' ? 'font-semibold text-gray-900' : ''
			}`}
			on:click={() => (active = 'projects')}>Projects</a
		>
		<a
			href="/writing"
			class={`text-lg font-serif text-gray-600 ${
				active === 'writing' ? 'font-semibold text-gray-900' : ''
			}`}
			on:click={() => (active = 'writing')}>Writing</a
		>
	</nav>
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	:global(body) {
		background-color: #d2d8e0;
	}
</style>
