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
    <div class="flex h-screen items-center justify-center">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-gray-900 text-center">MagicLink</h1>
            <p class="description">Sign in via magic link with your email below</p>
            <div class="w-full max-w-xs">
                <form @submit.prevent="register_ml" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input v-model="credentials.email" type="email" placeholder="Email" />
                    </div>
                    <button type="submit"
                        class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
