<template>
  <footer>
    <hr />
    <div class="w-11/12 mx-auto flex items-center justify-between my-8">
      <div>
        <nuxt-link to="/">
          <h4 class="text-green-500 text-2xl font-extrabold tracking-wide">
            lame
          </h4>
        </nuxt-link>
        <a
          href="https://github.com/TheBoringDude"
          target="_blank"
          rel="noreferrer"
          class="text-gray-600 hover:underline"
          >@TheBoringDude</a
        >
      </div>
      <div class="text-center py-4">
        <p class="text-gray-800">
          &copy; {{ new Date().getFullYear() }} | All Rights Reserved
        </p>
      </div>
      <div>
        <ul class="block text-sm">
          <li>
            <a
              class="text-gray-700 hover:text-green-500"
              target="_blank"
              rel="noreferrer"
              title="Visit also LCL-Paste"
              href="https://lcl-paste.vercel.app"
              >LCL Paste</a
            >
          </li>
          <li>
            <a
              class="text-gray-700 hover:text-green-500"
              target="_blank"
              rel="noreferrer"
              title="Visit also phurma"
              href="https://phurma.vercel.app"
              >phurma</a
            >
          </li>
          <li>
            <a
              class="text-gray-700 hover:text-green-500"
              target="_blank"
              rel="noreferrer"
              title="Visit also World of Cryptopups"
              href="https://cryptopups.cf"
              >cryptopups</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
