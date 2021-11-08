<nav class="flex justify-end px-3 py-2 md:hidden">
	<div class="text-gray-500">
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
				stroke-width="3"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</div>
</nav>

<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
