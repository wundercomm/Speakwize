<script setup lang = "ts">
const user = useSupabaseUser()
</script>

<template>
  <div class="w-1/10 h-screen fixed left-0 top-0 bg-toolbar-background-color">
    <div class="flex flex-col h-full justify-items-center">
      <NuxtLink to="https://wundercomm.com/">
        <button class="px-2 py-1 text-white mb-40 mt-1">
          <span class="self-center text-l font-semibold text-white">
            <!-- <img src="@/static/logo_speak.webp" alt="Logo" width="20" height="30"> -->
            <img src="@/static/logo_mark.svg" alt="Logo" width="30" height="50">
          </span>
        </button>
      </NuxtLink>
      <NuxtLink to="/">
        <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
          <span class="self-center text-l font-semibold text-white">
            <Icon class="text-3xl" name="mdi:home" />
          </span>
        </button>
      </NuxtLink>
      <template v-if="!user">
        <NuxtLink to="/login">
          <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
            <span class="self-center text-l font-semibold text-white">
              <Icon class="text-3xl" name="mdi:user" />
            </span>
          </button>
        </NuxtLink>
        <!-- <NuxtLink to="/register">
          <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2">
            <span class="self-center text-l font-semibold text-white">Register</span>
          </button>
        </NuxtLink> -->
        <NuxtLink to="/MagicLink">
          <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
            <span class="self-center text-l font-semibold text-white">
              <Icon class="text-3xl" name="mdi:email-send" />
            </span>
          </button>
        </NuxtLink>
      </template>
      <NuxtLink to="/protected" v-else>
        <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
          <span class="self-center text-l font-semibold text-white">
            <Icon class="text-3xl" name="mdi:lock" />
          </span>
        </button>
      </NuxtLink>
    </div>
  </div>
  <NuxtPage />
</template>
