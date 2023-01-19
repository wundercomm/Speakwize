<script setup lang = "ts">
const user = useSupabaseUser()
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Podcast Wundercomm</span>
      </a>
      <ul class="flex">
        <li class="mr-6">
          <NuxtLink to="/">
            <span class="self-center text-l font-semibold text-white">Home</span>
          </NuxtLink>
        </li>
        <template v-if="!user">
          <li class="mr-6">
            <NuxtLink to="/login">
            <span class="self-center text-l font-semibold text-white">Login</span>
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink to="/register">
              <span class="self-center text-l font-semibold text-white">Register</span>
            </NuxtLink>
          </li>
          <li class="mr-6">
            <NuxtLink to="/magiclink">
              <span class="self-center text-l font-semibold text-white">MagicLink</span>
            </NuxtLink>
          </li>
        </template>
        <li v-else>
          <NuxtLink to="/protected">
            <span class="self-center text-l font-semibold text-white">Protected</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
  <NuxtPage/>
</template>
