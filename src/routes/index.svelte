<script>
	import work from '../data/work';
	import projects from '../data/projects';
	import writing from '../data/writing';
</script>

<svelte:head>
	<title>Steven Bruno</title>
</svelte:head>

<div class="max-w-screen-lg mx-auto mt-24 text-grue">
	<div class="mb-24">
		<h1 class="text-xl font-medium text-salmon mb-1">Steven Bruno</h1>
		<p class="max-w-2xl mb-1">
			I'm a product designer based in New York City. Currently, I'm designing software for
			restaurants at Toast. To get in touch, reach me at
			<span class="underline"><a href="mailto:sbruno636@gmail.com">sbruno636@gmail.com</a></span>.
		</p>
		<div class="flex">Social links</div>
	</div>
	<div class="flex flex-col gap-16 lg:flex-row lg:gap-0 justify-between mb-8">
		<div class="w-72 md:w-80">
			<h2 class="text-lg font-medium text-slate-800 mb-4">Work</h2>
			<div class="flex flex-col gap-5">
				{#each work as work}
					<div>
						<p class="text-slate-650 mb-2">
							<a
								href={work.url}
								class="border-b-2 border-slate-600 hover:border-salmon hover:text-salmon"
								>{work.name}</a
							>
						</p>
						<p>{work.description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-72 md:w-80">
			<h2 class="text-lg font-medium text-slate-800 mb-4">Personal works</h2>
			<div class="flex flex-col gap-5">
				{#each projects as project}
					<div>
						<p class="text-slate-650 mb-2">
							<a
								href={project.url}
								class="border-b-2 border-slate-600 hover:border-salmon hover:text-salmon"
								>{project.name}</a
							>
						</p>
						<p>{project.description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-72 md:w-80">
			<h2 class="text-lg font-medium text-slate-800 mb-4">Writing</h2>
			<p class="italic font-light">There's nothing here at the moment.</p>
		</div>
	</div>
</div>
