<script>
	import { ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
</script>

<div class="h-20 w-full"></div>

<!-- content here -->
<div class="mx-auto w-4/5">
	<div style="height:200vh;" class="overflow-auto px-2 py-2.5 pb-16 sm:px-4">
		<Skeleton class="mb-8 mt-16" />
		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />
	</div>
</div>
