<script setup lang="ts">
definePageMeta({
    middleware: 'unauthenticated'
});

const supaAuth = useSupabaseAuthClient().auth

const credentials = reactive({
    email: '',
    password: ''
})

const register = async () => {
    const { error } = await supaAuth.signUp(credentials)
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
            <h1 class="mt-6 text-3xl font-extrabold text-white text-center">Register</h1>
            <div class="w-full max-w-xs">
                <p class="description text-white font-mono text-xs">Welcome to our platform, please create your account by providing your email and a password. With your account you will be able to access exclusive content and personalized features. Register now and enjoy all the benefits of being part of our community.</p>
                <form @submit.prevent="register" class="bg-white shadow-md rounded-2xl px-6 pt-4 pb-8 mb-4 mt-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input v-model="credentials.email" type="email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
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
                            class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">Register</button>
                        <NuxtLink to="/login">
                            <a class="underline text-sm">If you already have an account, Login here</a>
                        </NuxtLink>
                    </div>
                </form>
            </div>

        </div>
    </div>

</template>