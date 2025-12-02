<script lang="ts">
	let { files = $bindable() } = $props();

	let dragOver = $state(false);

	const handleDrop = (e) => {
		e.preventDefault();
		files = e.dataTransfer.files;
		dragOver = false;
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		if (!dragOver) dragOver = true;
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		if (dragOver) dragOver = false;
	};

	const handleFileChange = (e) => {
		files = e.target.files;
	};
</script>

<div
	class={`flex h-full w-full flex-col items-center justify-center rounded-lg border ${dragOver ? 'border-emerald-300/30' : 'border-transparent'} transition-colors duration-300`}
	ondrop={handleDrop}
	ondragover={handleDragOver}
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	aria-label="Drag and drop images"
	aria-dropeffect="move"
	role="application"
>
	<input id="file" name="file" type="file" class="hidden" multiple onchange={handleFileChange} />
	<label
		for="file"
		class="pointer-events-none flex flex-col items-center gap-y-2 text-base text-neutral-600 dark:text-neutral-400"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-12">
			<path
				fill-rule="evenodd"
				d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
				clip-rule="evenodd"
			/>
			<path
				d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
			/>
		</svg>
		<span>Drop files here</span>
	</label>
</div>
