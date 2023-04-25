<script setup lang="ts">
import { ref } from "vue"
const userEmail = ref("")
const backendResponse = ref("")
async function suscribeToNewsletter() {
    const { data } = await useFetch(`/api/subscribe?email=${userEmail.value}`)
    backendResponse.value = data as unknown as string
}
// OPCIÓN PARA LA API

// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient('https://your-project-url.supabase.co', 'your-supabase-api-key')

// async function suscribeToNewsletter() {
//     const { data, error } = await supabase.from('newsletter').insert([{ email: userEmail.value }])

//     if (error) {
//         backendResponse.value = error.message
//     } else {
//         backendResponse.value = '¡Gracias por suscribirte a nuestra newsletter!'
//     }
// }

</script>

<template>
    <div class="flex h-screen items-center justify-center bg-background-color">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-white text-center">Subscribe to Newsletter <Icon name="mdi:email-newsletter" class="text-3xl"/></h1>
            <div class="w-full max-w-xs">
                <p class="description text-white font-mono text-xs">Subscribe to our newsletter to receive updates and
                    relevant information about our app.</p>
                <form @submit.prevent="suscribeToNewsletter"
                    class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mt-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input type="email" id="email" v-model="userEmail" name="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="container flex flex-col justify-center">
                        <button type="submit"
                            class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">Subscribe</button>
                        <!-- <NuxtLink to="/register">
                            <a class="underline text-sm">If you need to register with email and password, click here</a>
                        </NuxtLink>
                        <NuxtLink to="/login" class="mt-4">
                            <a class="underline text-sm">If you already have an account, Login here</a>
                        </NuxtLink> -->
                        <pre> {{ backendResponse }} </pre>
                    </div>
                </form>
            </div>
        </div>
    </div></template>
