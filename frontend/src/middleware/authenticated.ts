export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser()
    if(!user.value) {
        console.log('user is not authenticated')
        return navigateTo('/login')
    }
    if(SUPABASE_KEY){
        console.log('supabase key is present')
    }
});