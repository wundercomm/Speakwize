<script setup lang="ts">
definePageMeta({
    middleware: 'unauthenticated'
});

const supaAuth = useSupabaseAuthClient().auth

const credentials = reactive({
    email: '',
    password: ''
})

const register_ml = async () => {
    const { error } = await supaAuth.signInWithOtp(credentials)
    if (error) {
        alert(error.message)
    }
    else {
        alert('Check your email for the login link!')
        return navigateTo('/')
    }
}
</script>

<template>
    <div class="flex h-screen items-center justify-center bg-gradient">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-white text-center">MagicLink</h1>
            <div class="w-full max-w-xs">
                <p class="description text-white font-mono text-xs">Sign in via magic link with your email below</p>
                <form @submit.prevent="register_ml" class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 mt-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input v-model="credentials.email" type="email" placeholder="Email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="container flex flex-col justify-center">
                        <button type="submit" class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2">Send MagicLink</button>
                        <NuxtLink to="/register">
                            <a class="underline text-sm">If you need to register with email and password, click here</a>
                        </NuxtLink>
                        <NuxtLink to="/login" class="mt-4">
                            <a class="underline text-sm">If you already have an account, Login here</a>
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
