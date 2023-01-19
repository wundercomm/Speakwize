<script setup lang="ts">
definePageMeta({
    middleware: 'authenticated'
});

const supaAuth = useSupabaseAuthClient().auth

const logout = async () => {
    const { error } = await supaAuth.signOut()
    if(error) {
        alert(error.message)
    } else {
        return navigateTo('/login');
    }
};
</script>

<template>
    <div>
        <h1 class="mt-6 text-3xl font-extrabold text-gray-900">Protected Page</h1>
        <button @click="logout" class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
    </div>
</template>