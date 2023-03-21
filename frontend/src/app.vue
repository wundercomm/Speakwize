<script setup lang = "ts">
definePageMeta({
    middleware: 'authenticated'
});

const user = useSupabaseUser()
const supaAuth = useSupabaseAuthClient().auth

const logout = async () => {
    const { error } = await supaAuth.signOut()
    if (error) {
        alert(error.message)
    } else {
        return navigateTo('/login');
    }
};
</script>

<script lang="ts">
  import { ref } from 'vue'
  const showProtected = ref(false)
</script>


<template>
  <div class="w-1/10 h-screen fixed left-0 top-0 bg-toolbar-background-color">
    <div class="flex flex-col h-full justify-items-center">
      <div class="px-2 py-1 text-white mb-40 mt-1">
        <NuxtLink to="https://wundercomm.com/">
          <button>
            <span class="self-center text-l font-semibold text-white">
              <img src="@/static/logo_mark.svg" alt="Logo" width="30" height="50">
            </span>
          </button>
        </NuxtLink>
      </div>
      <NuxtLink to="/">
        <button @click="showProtected = false" class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
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
        <NuxtLink to="/MagicLink">
          <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
            <span class="self-center text-l font-semibold text-white">
              <Icon class="text-3xl" name="mdi:email-send" />
            </span>
          </button>
        </NuxtLink>
      </template>
      <template v-else>
        <NuxtLink to="/protected">
          <button @click="showProtected = true" class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
            <span class="self-center text-l font-semibold text-white">
              <Icon class="text-3xl" name="mdi:headphones" />
            </span>
          </button>
        </NuxtLink>
        <template v-if="showProtected">
          <NuxtLink to="/ep1">
            <button class="px-2 py-1 text-white bg-teal-700 mb-2 hover:bg-teal-900 ml-10">
              <span class="self-center text-l font-semibold text-white">
                EP1
              </span>
            </button>
          </NuxtLink>
          <NuxtLink to="/ep2">
            <button class="px-2 py-1 text-white bg-teal-700 mb-2 hover:bg-teal-900 ml-10">
              <span class="self-center text-l font-semibold text-white">
                EP2
              </span>
            </button>
          </NuxtLink>
          <!-- <NuxtLink to="/ep2">
            <button class="px-3 py-1 text-white bg-teal-700 mb-2 hover:bg-teal-900">
              <span class="self-center text-xl font-semibold text-white">
                EP2
              </span>
            </button>
          </NuxtLink> -->
        </template>

        <NuxtLink to="/wize">
          <button class="px-2 py-1 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
            <span class="self-center text-l font-semibold text-white">
              <Icon class="text-3xl" name="mdi:frequently-asked-questions" />
            </span>
          </button>
        </NuxtLink>
        <div class="py-52">
          <button @click="logout" class="px-2 text-white bg-toolbar-background-color mb-2 hover:bg-blue-700">
              <span class="self-center text-l font-semibold text-white">
                <Icon class="text-3xl" name="mdi:logout" />
              </span>
            </button>
        </div>
      </template>
    </div>
  </div>
  <NuxtPage />
</template>
