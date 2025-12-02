<script lang="ts">
	import ImageFrame from '$lib/components/global/enhanced-image-frame.svelte';
	import ImageViewer from '$lib/components/global/enhanced-image-viewer.svelte';
	import BombayImage from '$lib/assets/images/bombayv.jpg?enhanced';
	import BombayImage2 from '$lib/assets/images/bombayv2.jpg?enhanced';
	import BabyPhoto from '$lib/assets/images/baby_photo.jpg?enhanced';
	import BabyShower from '$lib/assets/images/baby_shower.jpg?enhanced';
	import TrueWatch from '$lib/assets/images/true_watch.jpg?enhanced';
	import CarWheel from '$lib/assets/images/car_wheel.jpg?enhanced';

	let currentImage: any | null = $state(null);
</script>

<svelte:head>
	<title>Home | Mauricio Sebastian Rivera Perez</title>
	<meta
		name="description"
		content="My name is Mauricio Sebastian Rivera Perez, I'm a information technology student and a software engineer currently working at @KhanDesign as a lead developer."
	/>
</svelte:head>

<main class="relative flex w-full flex-col">
	<div class="flex items-center gap-x-2">
		<span
			class="block size-2.5 animate-pulse rounded-full bg-linear-to-br from-emerald-200 to-emerald-500 shadow-2xl drop-shadow-lg"
		></span>
		<p
			class="text-xs font-medium uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
		>
			About Me
		</p>
	</div>
	<h1 class="mt-4 text-5xl font-medium drop-shadow-lg md:mt-6 md:text-6xl">
		Unique experiences, <br />
		<span class="text-emerald-500">unique solutions</span>
	</h1>

	<div class="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-6">
		<div class="order-2 md:order-1 md:row-span-4">
			<ImageFrame
				onclick={() => (currentImage = BombayImage)}
				alt="Mauricio Sebastian Rivera Perez"
			>
				<enhanced:img src={BombayImage} alt={'Mauricio Sebastian Rivera Perez with face paint'} />
			</ImageFrame>
		</div>
		<div class="text-medium order-1 mx-auto px-8 text-xl md:order-2 md:mt-10 lg:mt-12">
			<span>Let me introduce myself</span> — My name is
			<span class="font-medium text-text">Mauricio Sebastian Rivera Perez</span>
		</div>
		<div
			class="order-3 mx-auto flex flex-col gap-y-2 px-8 py-8 md:col-start-1 md:row-span-2 md:row-start-5 md:py-0 lg:mt-6"
		>
			<h3 class="text-xl font-medium">Who am I?</h3>
			<p class="text-lg text-neutral-600 dark:text-neutral-400">
				I'm a information technology student and a software engineer currently working at <a
					href="https://khandesign.net/links"
					target="_blank"
					class="text-lg font-medium text-emerald-500">Khan Design</a
				>
				as a lead developer. I have a passion for <span class="font-medium">photography</span> and
				<span class="font-medium">a photo's composition</span>, as you will see in the rest of this
				site.
			</p>
		</div>
		<div class="order-4 md:col-start-2 md:row-span-5 md:row-start-2">
			<ImageFrame onclick={() => (currentImage = BombayImage2)} alt="Mauricio Rivera Underwater">
				<enhanced:img src={BombayImage2} alt={'Mauricio Rivera Underwater'} />
			</ImageFrame>
		</div>
	</div>

	<div class="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-4">
		<div class="order-2 md:order-1 md:row-span-3">
			<ImageFrame onclick={() => (currentImage = BabyPhoto)} alt="Baby enjoying her freedom">
				<enhanced:img src={BabyPhoto} alt={'Baby enjoying her freedom'} />
			</ImageFrame>
		</div>
		<div class="text-medium order-1 mx-auto px-8 text-xl md:order-2 md:mt-10 lg:mt-12">
			<h3 class="text-xl font-semibold">My world through a photo</h3>
			<p class="text-lg text-neutral-600 dark:text-neutral-400">
				Everything has a story, an emotion, a feeling. Every photo I take is a memory
				<span class="font-medium">captured in time</span> and a moment that represents a part of my life.
			</p>
		</div>
		<div
			class="order-3 mx-auto flex flex-col gap-y-2 px-8 py-8 md:col-start-1 md:row-start-4 md:py-0 lg:mt-6"
		>
			<h3 class="text-xl font-medium">Life as a story</h3>
			<p class="text-lg text-neutral-600 dark:text-neutral-400">
				Everyone has a story to tell, no matter how big or small, from the moment we are born to the
				moment we die. Two single moments can tell our whole life story.
			</p>
		</div>
		<div class="order-4 md:col-start-2 md:row-span-3 md:row-start-2">
			<ImageFrame onclick={() => (currentImage = BabyShower)} alt="Dad kissing mom belly">
				<enhanced:img src={BabyShower} alt={'Dad kissing mom belly'} />
			</ImageFrame>
		</div>
	</div>

	<div class="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-4">
		<div class="order-2 md:order-1 md:row-span-3">
			<ImageFrame
				onclick={() => (currentImage = TrueWatch)}
				alt="Rainbow watch taken over 30 second exposure"
			>
				<enhanced:img src={TrueWatch} alt={'Rainbow watch taken over 30 second exposure'} />
			</ImageFrame>
		</div>
		<div class="text-medium order-1 mx-auto px-8 text-xl md:order-2 md:mt-10 lg:mt-12">
			<h3 class="text-xl font-medium">Going beyond</h3>
			<p class="text-lg text-neutral-600 dark:text-neutral-400">
				I'm focused on bringing the best to every project I take on, from the smallest to the
				largest. I'm constantly learning and improving my skills to provide the best solutions.
			</p>
		</div>
		<div
			class="order-3 mx-auto flex flex-col gap-y-2 px-8 py-8 md:col-start-1 md:row-start-4 md:py-0 lg:mt-6"
		>
			<h3 class="text-xl font-medium">The next step</h3>
			<p class="text-lg text-neutral-600 dark:text-neutral-400">
				But this is just my story, and it's not over yet. As I continue to grow and learn, I hope to
				bring more unique experiences and solutions to the world, one memory at a time.
			</p>
		</div>
		<div class="order-4 md:col-start-2 md:row-span-3 md:row-start-2">
			<ImageFrame onclick={() => (currentImage = CarWheel)} alt="Car wheel with water reflection">
				<enhanced:img src={CarWheel} alt={'Car wheel with water reflection'} />
			</ImageFrame>
		</div>
	</div>
</main>

<ImageViewer src={currentImage} onclick={() => (currentImage = null)}>
	<enhanced:img
		src={currentImage}
		alt="Mauricio Rivera"
		class="mx-auto h-full w-auto cursor-default object-contain"
	/>
</ImageViewer>
