<template>
  <div class="w-5/6 mx-auto py-20">
    <div class="text-center">
      <h3 class="text-3xl font-black text-green-500 mb-4">web apps</h3>
      <p class="text-lg tracking-wide text-gray-600">
        the list of <strong>lame</strong> web apps.
      </p>
    </div>
    <AppsList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "Web Apps | lame"
    };
  }
});
</script>
