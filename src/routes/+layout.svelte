<script>
	import '../app.pcss';
	import { page } from '$app/stores';
	let urls = [
		{ path: '/', string: 'Home' },
		{ path: '/discover', string: 'Discover' },
		{ path: '/mylibrary', string: 'MyLibrary' },
		{ path: '/myprofile', string: 'MyProfile' },
		{ path: '/settings', string: 'Settings' }
	];
	$: activeUrl = $page.url.pathname;
</script>

<div class="fixed z-10 w-full bg-white">
	<div class="p-4 pb-2 text-3xl font-extrabold">MyBookList</div>
	<hr />
	<nav class="mb-1">
		<ul class="navigation hide-scroll-bar flex flex-row gap-7 overflow-x-auto px-4">
			{#each urls as item}
				<li class="py-2">
					<a
						class="{activeUrl === item.path
							? 'border-b-4 border-b-slate-600'
							: ''} pb-1 hover:border-b-4"
						href={item.path}>{item.string}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<hr />
</div>
<slot />

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scroll-bar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
