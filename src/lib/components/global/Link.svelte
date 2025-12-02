<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		onclick?: () => void;
		href: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
		transformOrigin?: 'origin-left' | 'origin-center' | 'origin-right';
		children: () => any;
		class?: string;
	}

	let { onclick, href, target, transformOrigin, children, class: className }: Props = $props();
</script>

<a
	class:font-medium={page.url.pathname === href}
	class:font-normal={page.url.pathname !== href}
	class={`group relative flex w-fit flex-col text-base tracking-wide ${className}`}
	{href}
	target={target || '_self'}
	{onclick}
>
	{@render children()}
	<span
		class={`w-full border-b border-emerald-700 transition duration-500 dark:border-emerald-300 ${transformOrigin || 'origin-center'} group-hover:scale-x-100 ${page.url.pathname === href ? 'scale-x-100' : 'scale-x-0'}`}
	></span>
</a>
