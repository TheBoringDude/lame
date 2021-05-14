<template>
  <div>
    <AppsHead appKey="rssparser" />

    <hr />

    <AppsContainer>
      <div class="text-left">
        Note:
        <strong>
          <a
            class="hover:text-green-500"
            href="https://github.com/TheBoringDude/simple-rss-worker"
          >
            more about this project
          </a>
        </strong>
      </div>

      <div class="w-2/3 mx-auto">
        <div class="flex flex-col my-4">
          <label for="rss-url-input" class="mb-1">Enter a RSS URL:</label>
          <div class="flex">
            <input
              v-model="rssUrl"
              type="url"
              class="w-full py-2 px-3 rounded-lg border-2 focus:border-green-300 hover:border-green-300 focus:outline-none"
            />
            <button
              :disabled="querying"
              @click="parseQuery"
              class="py-2 px-6 bg-green-400 hover:bg-green-500 rounded-lg ml-2 text-white"
            >
              {{ queryText }}
            </button>
          </div>
        </div>

        <div class="flex flex-col my-4">
          <label for="rss-json-output">json output:</label>
          <textarea
            :value="output"
            readonly
            class="py-2 px-3 rounded-lg border-2 focus:border-green-300 hover:border-green-300 focus:outline-none h-72"
          ></textarea>
        </div>
      </div>
    </AppsContainer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "Simple RSS Worker"
    };
  },

  data() {
    return {
      queryText: "query",
      querying: false,
      output: "",
      rssUrl: ""
    };
  },

  methods: {
    parseQuery() {
      if (!this.rssUrl) return;

      // loading
      this.querying = true;
      this.queryText = "querying...";

      const body = {
        url: this.rssUrl
      };
      //
      fetch("https://rss.theboringdude.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(r => r.json())
        .then(data => {
          this.queryText = "query";
          this.querying = false;
          this.output = JSON.stringify(data, null, 4);
        })
        .catch(e => console.error(e)); // TODO: handle the errors
    }
  }
});
</script>
