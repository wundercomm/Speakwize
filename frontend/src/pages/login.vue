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
    <div class="flex h-screen items-center justify-center bg-background-color">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-white text-center ">Login</h1>
            <div class="w-full max-w-xs mt-2">
                <p class="description text-white font-mono text-xs">Sign in or create an account to access exclusive content and personalized features.</p>
                <form @submit.prevent="login" class="bg-white shadow-md rounded-2xl px-6 pt-4 pb-8 mb-4 mt-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input v-model="credentials.email" type="email" placeholder="Email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input v-model="credentials.password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="**********">
                    </div>
                    <div class="container flex flex-col justify-center">
                        <button type="submit"
                            class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Login</button>
                        <NuxtLink to="/register">
                            <a class="underline text-sm">If you need to register, click here</a>
                        </NuxtLink>
                        <NuxtLink to="/magiclink" class="mt-4">
                            <a class="underline text-sm">If you need to login with magic link, click here</a>
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>