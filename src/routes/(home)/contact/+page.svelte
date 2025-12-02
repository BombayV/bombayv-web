<!-- @migration-task Error while migrating Svelte code: Unexpected token
https://svelte.dev/e/js_parse_error -->
<!-- @migration-task Error while migrating Svelte code: Unexpected token
https://svelte.dev/e/js_parse_error -->
<script lang="ts">
	import EnhancedImageFrame from '$lib/components/global/enhanced-image-frame.svelte';
	import EnhancedImageViewer from '$lib/components/global/enhanced-image-viewer.svelte';
	import TrainCameraVertical from '$lib/assets/images/train_camera.jpg?enhanced';
	import TrainCameraHorizontal from '$lib/assets/images/train_camera_horizontal.jpg?enhanced';
	import Link from '$lib/components/global/link.svelte';

	let currentImage: string = $state('');
</script>

<svelte:head>
	<title>Contact | Mauricio Sebastian Rivera Perez</title>
	<meta
		name="description"
		content="Contact me if you have any questions or if you want to work with me. I'm always open to new opportunities and challenges related to web development or photography."
	/>
	<meta property="og:title" content="Contact | Mauricio Sebastian Rivera Perez" />
	<meta
		property="og:description"
		content="Contact me if you have any questions or if you want to work with me. I'm always open to new opportunities and challenges related to web development or photography."
	/>
</svelte:head>

<main class="relative flex w-full flex-col">
	<div class="flex items-center gap-x-2">
		<span
			class="block size-2.5 animate-pulse rounded-full bg-linear-to-br from-emerald-200 to-emerald-500 shadow-2xl drop-shadow-lg"
		></span>
		<p
			class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
		>
			Contact
		</p>
	</div>
	<h1 class="mt-4 text-5xl font-medium drop-shadow-lg md:mt-6 md:text-6xl">
		Lets connect and
		<br />
		<span class="text-emerald-500">find the best solution</span>
	</h1>
	<div class="relative mt-12 grid w-full gap-x-16 md:grid-cols-2">
		<div class="mt-4 flex flex-col">
			<form method="POST" action="?/send_form">
				<div class="grid w-full grid-cols-1 gap-x-4 md:grid-cols-2">
					<div>
						<label for="name" class="inp-label"> Name </label>
						<input
							type="text"
							name="name"
							id="name"
							required
							class="inp"
							placeholder="Mauricio Rivera"
						/>
					</div>
					<div class="mt-4 md:mt-0">
						<label for="email" class="inp-label"> Email </label>
						<input
							type="email"
							name="email"
							id="email"
							required
							class="inp"
							placeholder="me@bombayv.com"
						/>
					</div>
					<div class="mt-4 md:col-span-2">
						<label for="subject" class="inp-label"> Subject </label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
							class="inp"
							placeholder="Web Development"
						/>
					</div>
					<div class="mt-4 md:col-span-2">
						<label for="message" class="inp-label"> Message </label>
						<textarea
							name="message"
							id="message"
							required
							class="inp h-24 max-h-28 min-h-10 resize-none"
							placeholder="I would like to work with you on a project..."
						></textarea>
					</div>
				</div>
				<div class="mt-4">
					<button type="submit" class="btn w-full bg-emerald-400/30 py-2 font-medium">
						Send
					</button>
				</div>
			</form>
			<span
				class="mx-auto my-12 h-0.5 w-3/6 rounded-full bg-neutral-400 md:my-8 dark:bg-neutral-600"
			></span>
			<div class="ml-4 md:ml-0">
				<p class="font-medium">Contact</p>
				<Link
					href="mailto:me@bombayv.com?subject=Contact%20from%20website"
					class="text-emerald-500"
					transformOrigin="origin-left"
				>
					me@bombayv.com
				</Link>
				<p class="mt-2 font-medium">Based in</p>
				<p class="text-neutral-600 dark:text-neutral-400">New York, USA</p>
				<p class="text-neutral-600 dark:text-neutral-400">New Jersey, United States</p>
				<p class="text-neutral-600 dark:text-neutral-400">San Luis Potosí, Mexico</p>
			</div>
		</div>
		<span
			class="mx-auto my-12 h-0.5 w-3/6 rounded-full bg-neutral-400 md:hidden dark:bg-neutral-600"
		></span>
		<div class="relative max-h-144">
			<EnhancedImageFrame
				onclick={() => (currentImage = TrainCameraVertical)}
				alt="Mauricio Rivera"
			>
				<enhanced:img
					src={TrainCameraVertical}
					alt={'Subject on a train track'}
					class="hidden w-full md:flex"
				/>
				<enhanced:img
					src={TrainCameraHorizontal}
					alt={'Subject on a train track'}
					class="block h-full w-full md:hidden"
				/>
			</EnhancedImageFrame>
		</div>
		<div class="col-span-2 w-full relative">
			<!-- Calendly inline widget begin -->
			<div
				class="calendly-inline-widget"
				data-url="https://calendly.com/msr26-njit/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=050410&text_color=a3a3a3&primary_color=10b981"
				style="min-width:320px;height:700px;"
			></div>
			<script
				type="text/javascript"
				src="https://assets.calendly.com/assets/external/widget.js"
				async
			></script>
			<!-- Calendly inline widget end -->
		</div>
	</div>
</main>

<EnhancedImageViewer src={currentImage} onclick={() => (currentImage = '')}>
	<enhanced:img
		src={currentImage}
		alt="Mauricio Rivera"
		class="mx-auto h-full w-auto cursor-default object-contain"
	/>
</EnhancedImageViewer>
