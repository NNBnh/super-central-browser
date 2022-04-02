<script>
  import { onMount } from "svelte";

  onMount(async function() {
    const response = await fetch("https://www.smwcentral.net/?p=section&s=smwhacks");

    const data = await response.text();

    console.log(data);
  });

  const hacks = [
    { id: 18238, name: "Invictus", demo: true, featured: true, length: 100, types: [0], authors: ["juzcook"], rating: 4.9, downloads: 225521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18239, name: "Invictus", demo: false, featured: true, length: 22, types: [1], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18240, name: "Invictus", demo: false, featured: false, length: 22, types: [2], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18241, name: "Invictus", demo: false, featured: false, length: 22, types: [3, 4], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18242, name: "Invictus", demo: false, featured: false, length: 22, types: [4], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18243, name: "Invictus", demo: false, featured: false, length: 22, types: [5], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18244, name: "Invictus", demo: false, featured: false, length: 22, types: [6], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" },
    { id: 18245, name: "Invictus", demo: false, featured: false, length: 22, types: [7], authors: ["juzcook"], rating: 5.0, downloads: 25521, preview: "https://dl.smwcentral.net/image/53596.png" }
  ];
</script>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap justify-center -m-4">
      {#each hacks as hack (hack.id)}
        <div class="p-4 md:w-1/3 lg:w-1/4">
          <div class="h-full bg-gray-800 hover:bg-gray-700 duration-200 overflow-hidden rounded-lg drop-shadow-md hover:scale-105 relative">
            <img class="w-full object-cover object-center [image-rendering:pixelated]" src={hack.preview} alt="Preview">

            <div class="p-4 flex flex-col">
              <h1 class="title-font text-lg font-bold text-white">{hack.name}</h1>

              <h2 class="mb-3 tracking-widest text-xs title-font font-medium">
                {#if hack.demo && hack.featured}
                  Featured Demo
                {:else if hack.featured}
                  Demo
                {:else if hack.featured}
                  Featured
                {/if}
              </h2>

              <p class="text-xs title-font font-semibold">
                {#each hack.types as type}
                  {#if      type === 0} <spam class="mr-2 px-2   py-1 rounded-full  text-green-900  bg-green-500">Easy</spam>
                  {:else if type === 1} <spam class="mr-2 px-2   py-1 rounded-full  text-amber-900  bg-amber-500">Normal</spam>
                  {:else if type === 2} <spam class="mr-2 px-2   py-1 rounded-full text-orange-900 bg-orange-500">Hard</spam>
                  {:else if type === 3} <spam class="mr-2 px-2   py-1 rounded-full    text-red-900    bg-red-500">Very Hard</spam>

                  {:else if type === 4} <spam class="mr-2 px-1.5 py-1 rounded-sm      text-sky-900    bg-sky-400">Beginner</spam>
                  {:else if type === 5} <spam class="mr-2 px-1.5 py-1 rounded-sm   text-violet-900 bg-violet-400">Intermediate</spam>
                  {:else if type === 6} <spam class="mr-2 px-1.5 py-1 rounded-sm     text-pink-900   bg-pink-400">Expert</spam>

                  {:else if type === 7} <spam class="mr-2 px-1.5 py-1 rounded-sm     text-gray-900   bg-gray-500">TAS</spam>
                  {:else if type === 8} <spam class="mr-2 px-1.5 py-1 rounded-sm     text-gray-900   bg-gray-500">Pit</spam>
                  {:else if type === 9} <spam class="mr-2 px-1.5 py-1 rounded-sm     text-gray-900   bg-gray-500">Troll</spam>
                  {/if}
                {/each}
              </p>

              <p class="mt-6 mb-12 inline-flex leading-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {hack.authors}
              </p>
            </div>

            <div class="absolute bottom-6 left-0 right-0 flex justify-center text-sm text-gray-500">
              <span class="inline-flex mx-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {hack.downloads}
              </span>

              <span class="inline-flex mx-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {hack.rating}
              </span>

              <span class="inline-flex mx-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-1">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                {hack.length}
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
