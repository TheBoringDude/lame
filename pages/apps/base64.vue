<template>
  <div>
    <AppsHead appKey="base64" />

    <hr />

    <div class="w-5/6 mx-auto my-12 text-center">
      <select
        v-model="mode"
        @change="resetInputOutput"
        class="mb-4 py-2 px-6 rounded-lg border-2 focus:outline-none focus:border-green-300 bg-gray-50"
      >
        <option value="decode">Decode</option>
        <option value="encode">Encode</option>
      </select>

      <div class="grid grid-cols-2 gap-4 text-left">
        <div class="flex flex-col">
          <label class="mb-1" for="string-input"
            >base64 string to {{ mode }}</label
          >
          <textarea
            v-model="input"
            @input="handleModeChange"
            class="border-2 rounded-lg hover:border-green-300 focus:border-green-300 focus:outline-none h-56 p-4"
          ></textarea>
        </div>
        <div class="flex flex-col">
          <label class="mb-1" for="output">output:</label>
          <textarea
            :value="output"
            readonly
            class="border-2 rounded-lg hover:border-green-300 focus:border-green-300 focus:outline-none h-56 p-4"
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      input: "",
      output: "",
      mode: "decode"
    };
  },

  methods: {
    handleModeChange() {
      if (this.mode === "decode") {
        this.decodeBase64();
      } else if (this.mode === "encode") {
        this.encodeBase64();
      }
    },
    resetInputOutput() {
      this.input = "";
      this.output = "";
    },
    decodeBase64() {
      try {
        this.output = atob(this.input);
      } catch {
        this.output = "";
      }
    },
    encodeBase64() {
      try {
        this.output = btoa(this.input);
      } catch {
        this.output = "";
      }
    }
  }
});
</script>
