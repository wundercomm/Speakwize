// import { sync } from 'git-rev-sync'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "nuxt-icon"],
    srcDir: "src",
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    supabase: {
        url: "https://aokitcbsebxnwfozpvvc.supabase.co",
        key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFva2l0Y2JzZWJ4bndmb3pwdnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3ODI4MDAsImV4cCI6MTk4ODM1ODgwMH0.X9aT8FNsKpWeE7fKdFXOopmzd5SiaK3RoxVUUl46MCM"
    },
    runtimeConfig: {
        supabase: {
            url: process.env.SUPABASE_URL,
            key: process.env.SUPABASE_KEY,
        },
    },
})
