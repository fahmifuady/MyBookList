<script>
	// @ts-nocheck

	import { ImagePlaceholder, Skeleton, TextPlaceholder, Chart } from 'flowbite-svelte';
	import { options } from '$lib/statistic.js';
</script>

<div class="h-40 w-full"></div>
<div class=" mx-auto grid w-4/5 grid-flow-col-dense grid-cols-4 gap-4">
	<div class="relative h-96 w-80">
		<div class="absolute left-0 top-[65px] h-64 w-80 rounded-md border border-zinc-300">
			<div class="top-20 m-4 flex flex-col">
				<div class=" h-28"></div>
				<div class=" text-center text-2xl font-medium text-black">Klee the Spark Knight</div>
				<div class=" text-center text-base font-normal text-black">
					Affiliation with Mondstat Knight of Favonius
				</div>
			</div>
		</div>
		<div class="absolute left-0 top-[65px] h-80 w-80 rounded-md border border-zinc-300">
			<div class="h-64 w-full"></div>
			<div class="flex justify-center">
				<p class="hidden">some text</p>
			</div>
		</div>
		<img
			class="absolute left-[95px] top-0 h-32 w-32 rounded-full border border-zinc-300 border-opacity-50"
			src="https://via.placeholder.com/130x130"
			alt="pp"
		/>
	</div>
	<div class="col-span-3 grid h-full place-items-end">
		<p class="mr-auto text-xl font-semibold text-black">Statistic</p>
		<div class=" h-80 w-full overflow-clip rounded-md border border-zinc-300">
			<!-- add dummy statistic bar -->
			<Chart {options} class="mx-5 max-w-lg" />
		</div>
	</div>
</div>

<div style="height:200vh;" class="mx-auto w-4/5 overflow-auto px-2 py-2.5 pb-16 sm:px-4">
	<Skeleton class="mb-8 mt-16" />
	<ImagePlaceholder class="my-8" />
	<TextPlaceholder class="my-8" />
</div>
