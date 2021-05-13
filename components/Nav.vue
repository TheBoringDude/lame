<template>
  <nav class="py-4 w-11/12 mx-auto flex items-center justify-between">
    <h1 class="text-3xl font-black tracking-wide text-green-500">
      <NuxtLink to="/">lame</NuxtLink>
    </h1>

    <ul class="flex items-center">
      <li class="text-lg mx-6">
        <NuxtLink class="hover:text-green-600" to="/apps"
          >See All Apps</NuxtLink
        >
      </li>
      <li class="text-lg ml-6">
        <a
          class="hover:text-green-600"
          href="https://github.com/TheBoringDude/lame"
          >Github</a
        >
      </li>
    </ul>
  </nav>
</template>
