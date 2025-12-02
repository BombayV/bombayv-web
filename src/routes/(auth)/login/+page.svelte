<script lang="ts">
	import { Sticker } from '@lucide/svelte';
</script>

<div class="relative flex h-dvh min-h-96 w-full flex-col items-center justify-center">
	<Sticker class="size-14 drop-shadow-sm" />
	<h1 class="mt-4 text-2xl font-bold">Dashboard</h1>
	<form class="mt-4 w-full max-w-sm" action="?/login_user" method="POST">
		<div class="mb-4 flex flex-col">
			<label for="email" class="inp-label">Email</label>
			<input type="email" id="email" name="email" class="inp" placeholder="me@bombayv.com" />
		</div>
		<div class="mb-4 flex flex-col">
			<label for="password" class="inp-label">Password</label>
			<input type="password" id="password" name="password" class="inp" placeholder="********" />
		</div>
		<button type="submit" class="btn w-full bg-emerald-400/30 py-2 font-medium">Login</button>
	</form>
</div>
