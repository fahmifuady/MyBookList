<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import { ImagePlaceholder, Skeleton, TextPlaceholder, Button } from 'flowbite-svelte';

	let user = writable(null);
	let handleLogin; // Declare the function outside of onMount

	onMount(async () => {
		const authModule = await import('$lib/googleAuth.js');

		// Define the function within onMount
		handleLogin = () => {
			authModule
				.signInWithGoogle()
				.then((userData) => {
					user.set(userData);
				})
				.catch((error) => {
					console.error('Login failed: ', error);
				});
		};
	});
</script>

<div class="h-20 w-full"></div>

<!-- content here -->
<div class="mx-auto w-4/5">
	<div class="overflow-auto px-2 py-2.5 pb-16 sm:px-4">
		<Skeleton class="mb-8 mt-16" />
		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />
	</div>
	{#if handleLogin}
		<Button color="green" class="mr-5 h-3/5" on:click={handleLogin}>Login using Google</Button>
	{/if}

	{#if $user}
		<div>
			<p>User Name: {$user.displayName}</p>
			<p>User Email: {$user.email}</p>
			<!-- Display more user details as needed -->
		</div>
	{/if}
</div>
