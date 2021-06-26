<template>
  <nav class="py-4 w-11/12 mx-auto flex items-center justify-between">
    <h1 class="text-3xl font-black tracking-wide text-green-500">
      <NuxtLink to="/">lame</NuxtLink>
    </h1>

    <ul class="flex items-center">
      <li class="mx-3 md:mx-6">
        <NuxtLink
          class="hover:text-green-600 tracking-wide text-gray-800"
          to="/apps"
          >See All Apps</NuxtLink
        >
      </li>
      <li class="ml-3 md:ml-6">
        <a
          class="hover:text-green-600 tracking-wide text-gray-800"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TheBoringDude/lame"
          >Github</a
        >
      </li>
    </ul>
  </nav>
</template>
