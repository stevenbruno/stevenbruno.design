<script>
	let openMenu = false;

	function toggleMenu() {
		openMenu ? (openMenu = false) : (openMenu = true);
	}
</script>

<div class="dark:bg-darkbg min-h-screen">
	<nav class="flex justify-end px-3 py-3 md:hidden">
		<div
			on:click={toggleMenu}
			class="text-gray-500 dark:text-gray-200 {openMenu ? 'invisible' : ''}"
		>
			<!-- Hamburger Menu -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</div>
	</nav>

	{#if openMenu}
		<div class="absolute top-0 left-0 w-10/12 h-full bg-white z-20">
			<ul>
				<li>About</li>
				<li>Projects</li>
				<li>Writing</li>
			</ul>
		</div>
		<div
			class="absolute top-0 left-0 h-full w-full bg-gray-900 bg-opacity-30 backdrop-blur-sm z-10 shadow-3xl"
		/>
		<div
			on:click={toggleMenu}
			class="text-gray-900 dark:text-gray-200 absolute top-0 right-0 px-2 py-2 z-20"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>
	{/if}

	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
