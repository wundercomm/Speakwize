<script setup lang="ts">
definePageMeta({
    middleware: 'unauthenticated'
});

const supaAuth = useSupabaseAuthClient().auth

const credentials = reactive({
    email: '',
    password: ''
})

const login = async () => {
    // const { error } = await supaAuth.signInWithPassword(credentials)
    const { error } = await supaAuth.signInWithPassword(credentials)
    if (error) {
        alert(error.message)
    }
    else {
        return navigateTo('/')
    }
}
</script>

<template>
    <div class="flex h-screen items-center justify-center">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-gray-900 text-center">Login Page</h1>
            <div class="w-full max-w-xs">
                <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input v-model="credentials.email" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input v-model="credentials.password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="**********">
                    </div>
                    <button type="submit"
                        class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                    <NuxtLink to="/register">
                        <button
                            class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">Register</button>
                    </NuxtLink>
                </form>
            </div>
        </div>
    </div>
</template>