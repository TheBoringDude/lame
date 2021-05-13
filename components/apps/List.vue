<template>
  <div class="my-12">
    <ul class="grid grid-cols-2 gap-8">
      <li
        :key="index"
        v-for="(app, index) in apps"
        class="border-2 border-green-300 p-4 rounded-md"
      >
        <h3 class="text-2xl font-bold text-green-500">
          {{ app.title }}
        </h3>
        <p class="text-gray-600 text-lg">{{ app.description }}</p>
        <div class="mt-4">
          <NuxtLink
            :to="'/apps/' + app.url"
            class="py-2 px-6 rounded-lg text-white bg-green-400 hover:bg-green-500"
            >visit</NuxtLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import apps from "~/lame.apps.json";

export default Vue.extend({
  data: () => {
    return {
      apps: Object.entries(apps).map(([key, value]) => value)
    };
  }
});
</script>
