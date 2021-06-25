<template>
  <div>
    <AppsHead appKey="myip" />

    <hr />

    <AppsContainer>
      <h3 class="text-xl font-bold mb-2">Your Current IP Information:</h3>
      <div
        class="bg-white p-6 rounded-lg text-black text-left max-w-xl mx-auto overflow-x-auto"
      >
        <pre><code v-if="$fetchState.pending">fetching...</code><code v-else>{{ JSON.stringify(ip, null, 4) }}</code></pre>
      </div>
    </AppsContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      ip: {}
    };
  },
  async fetch() {
    this.ip = await fetch(
      "https://my-ip.theboringdude.workers.dev/"
    ).then(res => res.json());
  },
  fetchOnServer: false
});
</script>
