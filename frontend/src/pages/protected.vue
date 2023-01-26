<script setup lang="ts">
definePageMeta({
    middleware: 'authenticated'
});

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

<template>
    <div class="flex h-screen items-center justify-center bg-background-color">
        <div class="absolute">
            <h1 class="mt-6 text-3xl font-extrabold text-white">Protected Page</h1>
            <div class="flex justify-center">
                <button @click="logout" class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
            </div>
        </div>
    </div>
</template>