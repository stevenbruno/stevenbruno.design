<script>
	import work from '../data/work';
	import projects from '../data/projects';
	import writing from '../data/writing';
</script>

<svelte:head>
	<title>Steven Bruno</title>
	<script src="https://kit.fontawesome.com/fcaec70f66.js" crossorigin="anonymous"></script>
</svelte:head>

<!-- For some reason I need to reference a dark mode class here in order for the dark mode on the html to work -->
<div class="max-w-screen-lg mx-auto pt-24 text-gray-500 dark:text-slate-400 dark:bg-darkbg">
	<div class="mb-24">
		<h1 class="text-xl font-medium tracking-wide text-blurple dark:text-blurple2 mb-1">
			Hi, I'm Steven
		</h1>
		<p class="max-w-2xl mb-2 leading-relaxed">
			I'm a product designer based in New York City. Currently, I'm designing software for
			restaurants at Toast. To get in touch, reach me at
			<span class="underline hover:text-blurple active:text-indigo-900 dark:active:text-indigo-500"
				><a href="mailto:sbruno636@gmail.com">sbruno636@gmail.com</a></span
			>.
		</p>
		<div class="flex gap-3 items-end text-lg text-gray-400">
			<a href="https://www.linkedin.com/in/stevenjbruno/"
				><i class="fab fa-linkedin-in text-xl hover:text-blurple" /></a
			>
			<a href="https://github.com/stevenbruno"><i class="fab fa-github hover:text-blurple" /></a>
			<a href="https://twitter.com/sbruno626"><i class="fab fa-twitter hover:text-blurple" /></a>
		</div>
	</div>
	<div class="flex flex-col gap-16 lg:flex-row lg:gap-0 justify-between mb-8">
		<div class="w-72">
			<h2 class="text-lg font-medium text-blurple dark:text-blurple2 mb-6">Work</h2>
			<div class="flex flex-col gap-5">
				{#each work as work}
					<div>
						<p class="text-slate-800 dark:text-slate-300 mb-2">
							<a
								href={work.url}
								class="border-b-2 border-slate-600 dark:border-slate-400 hover:border-blurple hover:text-blurple active:text-indigo-900 active:border-indigo-900 dark:active:text-indigo-500 dark:active:border-indigo-500"
								>{work.name}</a
							>
						</p>
						<p>{work.description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-72">
			<h2 class="text-lg font-medium text-blurple dark:text-blurple2 mb-6">Personal Projects</h2>
			<div class="flex flex-col gap-5">
				{#each projects as project}
					<div>
						<p class="text-slate-800 dark:text-slate-300 mb-2">
							<a
								href={project.url}
								class="border-b-2 border-slate-600 dark:border-slate-400 hover:border-blurple hover:text-blurple active:text-indigo-900 active:border-indigo-900 dark:active:text-indigo-500 dark:active:border-indigo-500"
								>{project.name}</a
							>
						</p>
						<p>{project.description}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="w-72">
			<h2 class="text-lg font-medium text-blurple dark:text-blurple2 mb-6">Writing</h2>
			<div class="flex flex-col gap-5">
				{#each writing as article}
					<div>
						<p class="text-slate-800 dark:text-slate-300 mb-2">
							<a
								href={article.url}
								class="border-b-2 border-slate-600 dark:border-slate-400 hover:border-blurple hover:text-blurple active:text-indigo-900 active:border-indigo-900 dark:active:text-indigo-500 dark:active:border-indigo-500"
								>{article.name}</a
							>
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
