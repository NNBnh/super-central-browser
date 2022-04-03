<script>
  import "../app.css";

  const title = `
    <svg class="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    <h1>Super Central Browser</h1>
  `;

  const year = new Date().getFullYear();
</script>

<header class="text-gray-400 bg-sky-500 drop-shadow-md body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-xl text-white mb-4 md:mb-0" href="/">
      {@html title}
    </a>
    <!-- TODO -->
  </div>
</header>

<slot />

<footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="ml-3 flex title-font font-medium items-center md:justify-start justify-center text-xl text-white">
      {@html title}
    </a>
    <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="https://NNBnh.github.io" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">NNB</a>
      &#169; 2022-{year}
    </p>
  </div>
</footer>
