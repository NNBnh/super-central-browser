<script>
	import { onMount } from 'svelte';
	import InfiniteScroll from 'svelte-infinite-scroll';

	let page = 0;
	const pageSize = 32;

	let allHacks = [];

	onMount(async () => {
		const response = await fetch('https://raw.githubusercontent.com/NNBnh/smwc-api/main/smw.json');
		allHacks = await response.json();
	});

	let hacks = [];
	let newBatch = [];

	$: {
		newBatch = allHacks.splice(pageSize * page, pageSize * (page + 1));
		hacks = [...hacks, ...newBatch];
	}
</script>

<section class="text-gray-400 bg-gray-900 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap justify-center">
			{#each hacks as hack, hackIndex (hack.id)}
				<div class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
					<a
						class="block h-full bg-gray-800 hover:bg-gray-700 duration-200 overflow-hidden rounded-lg drop-shadow-md hover:scale-105 relative"
						href="https://www.smwcentral.net/?p=section&a=details&id={hack.id}"
						target="_blank"
					>
						<img
							class="w-full object-cover object-center [image-rendering:pixelated]"
							src={hack.screenshot}
							alt="Preview"
						/>

						<div class="p-4 flex flex-col">
							<h1 class="title-font text-lg font-bold text-white">{hack.name}</h1>

							<div class="mb-2 tracking-widest text-xs title-font font-bold">
								{#if hack.demo} <h2 class="my-0.5">Demo</h2> {/if}
								{#if hack.featured} <h2 class="my-0.5">Featured</h2> {/if}

								{#each hack.types as type}
									{#if type === 0}
										<h2 class="my-0.5 text-green-400">Standard: Easy</h2>
									{:else if type === 1}
										<h2 class="my-0.5 text-amber-400">Standard: Normal</h2>
									{:else if type === 2}
										<h2 class="my-0.5 text-orange-400">Standard: Hard</h2>
									{:else if type === 3}
										<h2 class="my-0.5 text-red-400">Standard: Very Hard</h2>
									{:else if type === 4}
										<h2 class="my-0.5 text-sky-400">Kaizo: Beginner</h2>
									{:else if type === 5}
										<h2 class="my-0.5 text-violet-400">Kaizo: Intermediate</h2>
									{:else if type === 6}
										<h2 class="my-0.5 text-pink-400">Kaizo: Expert</h2>
									{:else if type === 7}
										<h2 class="my-0.5 text-gray-400">Tool-Assisted: Kaizo</h2>
									{:else if type === 8}
										<h2 class="my-0.5 text-gray-400">Tool-Assisted: Pit</h2>
									{:else if type === 9}
										<h2 class="my-0.5 text-gray-400">Misc.: Troll</h2>
									{/if}
								{/each}
							</div>

							<p class="mb-12 inline-flex flex-wrap text-sm">
								By&nbsp;
								{#each hack.authors as author, authorIndex (author.id)}
									<a
										class="font-bold hover:underline"
										style={author.style}
										href="https://www.smwcentral.net/?p=profile&id={author.id}"
										target="_blank">{author.name}</a
									>
									{#if authorIndex !== hack.authors.length - 1},&nbsp;{/if}
								{/each}
							</p>
						</div>

						<div class="absolute bottom-6 left-0 right-0 flex justify-center text-ms text-gray-500">
							<span class="inline-flex items-center mx-1.5">
								<svg
									class="w-4 h-4 mr-0.5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/></svg
								>
								{hack.downloads}
							</span>

							<span class="inline-flex items-center mx-1.5">
								<svg
									class="w-4 h-4 mr-0.5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/></svg
								>
								{hack.rating}
							</span>

							<span class="inline-flex items-center mx-1.5">
								<svg
									class="w-4 h-4 mr-0.5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
										clip-rule="evenodd"
									/></svg
								>
								{hack.length}
							</span>
						</div>
					</a>
				</div>
			{/each}

			<InfiniteScroll hasMore={newBatch.length} window={true} on:loadMore={() => page++} />
		</div>

		{#if newBatch.length}
			<div class="spinner">
				<div class="bounce1" />
				<div class="bounce2" />
				<div class="bounce3" />
			</div>
		{/if}
	</div>
</section>

<style>
	.spinner {
		margin: 100px auto 0;
		width: 70px;
		text-align: center;
	}

	.spinner > div {
		width: 18px;
		height: 18px;
		background-color: white;

		border-radius: 100%;
		display: inline-block;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}

	.spinner .bounce1 {
		animation-delay: -0.32s;
	}

	.spinner .bounce2 {
		animation-delay: -0.16s;
	}

	@keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
</style>
