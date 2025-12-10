<script lang="ts">
	import EnhancedImageFrame from '$lib/components/global/enhanced-image-frame.svelte';
	import { ExternalLink, Github, Linkedin, FileText, Calendar } from '@lucide/svelte';

	import khanDesign from '$lib/assets/images/projects/khandesign.png?enhanced';
	import bombayTech from '$lib/assets/images/bombayv.jpg?enhanced';
	import mYoung from '$lib/assets/images/projects/myoung.png?enhanced';
	import lyons from '$lib/assets/images/projects/lyons.png?enhanced';
	import bricePierce from '$lib/assets/images/projects/bricepierce.png?enhanced';
	import pdImagery from '$lib/assets/images/projects/image.png?enhanced';
	import entityEvolution from '$lib/assets/images/projects/entityevolution.png?enhanced';
	import atlas from '$lib/assets/images/projects/atlas.png?enhanced';
	import mPhotography from '$lib/assets/images/projects/mphotography.png?enhanced';
	import ihsAnxiety from '$lib/assets/images/projects/ihsanxiety.png?enhanced';
	import neobrutalism from '$lib/assets/images/projects/neobrutalism.png?enhanced';
	import clientSite from '$lib/assets/images/projects/final.png?enhanced';

	interface Project {
		title: string;
		company?: string;
		period: string;
		description: string;
		tags: string[];
		image?: any;
		link?: string;
		repo?: string;
	}

	const projects: Project[] = [
		{
			title: 'Lead Software Engineer',
			company: 'Khan Design',
			period: 'Feb 2024 - Present',
			description:
				'Leading software engineering efforts, utilizing Azure DevOps Services and Supabase to drive project success and streamline development workflows.',
			tags: ['Azure DevOps', 'Supabase', 'Leadership', 'Software Engineering'],
			image: khanDesign,
			link: 'https://khandesign.net/links'
		},
		{
			title: 'Neobrutalism History',
			company: 'NJIT',
			period: 'Nov 2025 - Dec 2025',
			description:
				'A comprehensive website exploring the history and principles of Neobrutalism in web design, built with React and Tailwind CSS.',
			tags: ['React', 'Tailwind CSS', 'Web Design', 'History'],
			image: neobrutalism,
			link: 'https://is117-neobrutalism.vercel.app/'
		},
		{
			title: 'Client Site',
			company: 'NJIT',
			period: 'Nov 2025 - Dec 2025',
			description:
				'A site designed for a client project, selling the product of such client. Built with React and Tailwind CSS to ensure a modern and responsive design.',
			tags: ['React', 'Tailwind CSS', 'Web Design'],
			image: clientSite,
			link: 'https://is117-final-project.vercel.app'
		},
		{
			title: 'Personal Blog Platform',
			company: 'BombayTech',
			period: 'Jun 2022 - Jun 2024',
			description:
				'Idealized, designed, and coded a personal blog platform for people to share their thoughts, art, and more. Focused on user experience and full-stack development.',
			tags: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'UX'],
			image: bombayTech
		},
		{
			title: 'Non-profit Website',
			company: 'MYoung Initiative',
			period: 'Aug 2023 - Nov 2023',
			description:
				'Developed and deployed a website for a non-profit organization in Kenya, helping them establish an online presence.',
			tags: ['Next.js', 'Web Development'],
			image: mYoung,
			link: 'https://myounginitiative.org/'
		},
		{
			title: 'Student Intern',
			company: 'Deloitte Digital',
			period: 'Jul 2023 - Jul 2023',
			description:
				'Developed and presented a weather app using OpenWeatherMap API. Utilized Python and Flask for backend development. Engaged in panels led by major financial institutions.',
			tags: ['Python', 'Flask', 'HTML5', 'Teamwork']
		},
		{
			title: 'Website Redesign',
			company: 'Lyons McGovern',
			period: 'Jun 2023 - Jun 2023',
			description:
				'Redesigned and coded a WordPress website using Tailwind CSS and SvelteKit, modernizing the look and feel while improving performance.',
			tags: ['SvelteKit', 'Tailwind CSS', 'WordPress', 'Front-End'],
			image: lyons,
			link: 'https://lyons-mcgovern.com/'
		},
		{
			title: 'Artist Portfolio',
			company: 'Bricepierce',
			period: 'Feb 2023 - Jun 2023',
			description:
				'Designed and coded a portfolio website for a partner and student, showcasing their work using Nuxt 3, TypeScript, and Tailwind CSS.',
			tags: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
			image: bricePierce,
			link: 'https://bricepierce.com/'
		},
		{
			title: 'Teacher Website',
			company: 'PDImagery',
			period: 'Apr 2023 - May 2023',
			description:
				'Idealized, designed, and coded a website for a teacher, utilizing Nuxt 3, TypeScript, and Tailwind CSS to create a professional online portfolio.',
			tags: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
			image: pdImagery,
			link: 'https://patrickdibenedetto.com/'
		},
		{
			title: 'Open Source Organization',
			company: 'Entity Evolution',
			period: 'Jul 2020 - Nov 2022',
			description:
				'Created an open-source organization to provide free FiveM resources to the community. Managed contributions and maintained the codebase.',
			tags: ['Lua', 'CSS', 'HTML5', 'JavaScript', 'Open Source'],
			image: entityEvolution,
			link: 'https://entityevolution.github.io/'
		},
		{
			title: 'Framework Documentation',
			company: 'Atlas Framework',
			period: 'Jul 2021 - Dec 2021',
			description:
				'Created the home website and comprehensive documentation for the Atlas Framework (FiveM), aiding developers in using the framework effectively.',
			tags: ['Vue.js', 'Tailwind CSS', 'Documentation'],
			image: atlas,
			link: 'https://atlasfw-github-io.pages.dev/'
		},
		{
			title: 'Photography Portfolio',
			company: 'MPhotography',
			period: 'Nov 2021 - Nov 2021',
			description:
				'Designed and developed my first website to host and showcase my photography portfolio.',
			tags: ['HTML5', 'CSS', 'JavaScript'],
			image: mPhotography,
			link: 'https://bombayv.github.io'
		},
		{
			title: 'Health Class Project',
			company: 'IHS Anxiety',
			period: 'Jan 2021 - Feb 2021',
			description:
				'Developed a final project website for a health class that promotes ways to reduce anxiety.',
			tags: ['Vue.js', 'Tailwind CSS'],
			image: ihsAnxiety,
			link: 'https://ihsanxiety.pages.dev/'
		}
	];
</script>

<svelte:head>
	<title>Portfolio | Mauricio Sebastian Rivera Perez</title>
	<meta
		name="description"
		content="Discover my professional portfolio showcasing a curated selection of my software development projects, highlighting my skills, expertise, and the impact of my work."
	/>
	<meta property="og:title" content="Portfolio | Mauricio Sebastian Rivera Perez" />
	<meta
		property="og:description"
		content="Discover my professional portfolio showcasing a curated selection of my software development projects, highlighting my skills, expertise, and the impact of my work."
	/>
</svelte:head>

<main class="relative flex w-full flex-col gap-y-12 pb-20">
	<div class="flex flex-col">
		<div class="flex items-center gap-x-2">
			<span
				class="block size-2.5 animate-pulse rounded-full bg-linear-to-br from-emerald-200 to-emerald-500 shadow-2xl drop-shadow-lg"
			></span>
			<p
				class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
			>
				Portfolio
			</p>
		</div>
		<h1 class="mt-4 text-5xl font-medium drop-shadow-lg md:mt-6 md:text-6xl">
			Crafting Digital<br />
			<span class="text-emerald-500">Experiences</span>
		</h1>
		<p class="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
			Learn more about my professional journey through a curated selection of my software
			development projects, showcasing my skills, expertise, and the impact of my work.
		</p>

		<div class="mt-8 flex flex-wrap gap-4">
			<a
				href="https://cdn.bombayv.com/Rivera_Mauricio_Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="glass group flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
			>
				<FileText class="size-4" />
				<span>View Resume</span>
			</a>
			<a
				href="https://linkedin.com/in/mauriveraperez"
				target="_blank"
				rel="noopener noreferrer"
				class="glass group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-white dark:hover:bg-neutral-800"
			>
				<Linkedin class="size-4 text-emerald-500" />
				<span>LinkedIn</span>
			</a>
		</div>
	</div>

	<div class="relative mt-12 flex flex-col gap-12">
		<!-- Vertical Line -->
		<div
			class="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 md:left-1/2 md:-ml-0.5 dark:bg-neutral-800"
		></div>

		{#each projects as project, i}
			{@const isEven = i % 2 === 0}
			<div
				class={`relative flex flex-col gap-8 gap-x-16 md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} ${i > 0 ? 'md:-mt-48' : ''}`}
			>
				<!-- Timeline Dot -->
				<div
					class="absolute left-4 top-8 z-10 size-4 -translate-x-1/2 rounded-full border-4 border-white bg-emerald-500 shadow-md md:left-1/2 dark:border-neutral-950"
				></div>

				<!-- Content Side -->
				<div class="ml-12 flex-1 md:ml-0 md:w-1/2">
					<div
						class="group relative flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
					>
						<!-- Image Section -->
						<div
							class="aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 transition-transform duration-300 dark:bg-neutral-800"
						>
							<EnhancedImageFrame
								alt={project.title}
								class="h-full"
								href={project.link}
								target="_blank"
							>
								{#if project.image}
									<enhanced:img
										src={project.image}
										alt={project.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								{:else}
									<div
										class="flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600"
									>
										<span class="text-sm font-medium uppercase tracking-widest"
											>No image available</span
										>
									</div>
								{/if}
							</EnhancedImageFrame>
						</div>

						<!-- Text Content -->
						<div class="flex flex-col gap-3">
							<div class="flex flex-col gap-1">
								<div class="flex items-start justify-between gap-4">
									<h3 class="text-2xl font-bold text-neutral-900 dark:text-white">
										{project.title}
									</h3>
									<div class="flex gap-2">
										{#if project.repo}
											<a
												href={project.repo}
												target="_blank"
												rel="noopener noreferrer"
												class="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
												aria-label="View Source Code"
											>
												<Github class="size-5" />
											</a>
										{/if}
										{#if project.link}
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												class="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
												aria-label="Visit Website"
											>
												<ExternalLink class="size-5" />
											</a>
										{/if}
									</div>
								</div>
								{#if project.company}
									<p class="text-lg font-medium text-emerald-600 dark:text-emerald-400">
										{project.company}
									</p>
								{/if}
								<div class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
									<Calendar class="size-4" />
									<span>{project.period}</span>
								</div>
							</div>

							<p class="text-neutral-600 dark:text-neutral-400">
								{project.description}
							</p>

							<div class="mt-2 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<span
										class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>

				<!-- Empty Side for Desktop Layout -->
				<div class="hidden flex-1 md:block"></div>
			</div>
		{/each}
	</div>
</main>
