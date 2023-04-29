<template>
    <div class="flex h-screen items-center justify-center bg-gradient">
        <div class="w-1/2 text-left">
            <h1 class="mt-6 text-3xl font-extrabold text-foreground-color text-center text-8xl">
                SpeakWize<Icon name="mdi:google-podcast" />
            </h1>
            <p class="text-foreground-color text-center font-mono text-justify  text-xl my-8 mx-8 p-8">SpeakWize is an intuitive podcast app that brings the power of speech recognition to your fingertips. With SpeakWize, you can automatically generate summaries, search for specific keywords in the audio, identify speaker diarisation, and easily export your transcripts to other applications. Make podcasting easier and more efficient with SpeakWize!</p>
            <div class="container flex flex-col justify-center items-center">
                <NuxtLink to="/subscribe" class="mt-4">
                    <button class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
                        Apply for early access <Icon name="mdi:clipboard-text-clock" />
                    </button>
                </NuxtLink>
            </div>
        </div>
        <div class="w-1/2">
            <img src="@/static/logo_speak.webp" alt="Speakwize_logo" class="object-fit-cover">
        </div>
    </div>
</template>

<!-- IDEA RESPONSIVE -->
<!-- <template>
    <div class="flex h-screen items-center justify-center bg-gradient flex-col  md:grid-cols-3">
        <div class="w-full md:w-1/2 order-last md:order-first">
            <img src="@/static/logo_speak.webp" alt="Speakwize_logo" class="object-fit-cover">
        </div>
        <div class="w-full md:w-1/2 order-first md:order-last text-left">
            <h1 class="mt-6 text-3xl font-extrabold text-foreground-color text-center text-8xl">
                SpeakWize<Icon name="mdi:google-podcast" />
            </h1>
            <p class="text-foreground-color text-center font-mono text-justify  text-xl my-8 mx-8 p-8">SpeakWize is an intuitive podcast app that brings the power of speech recognition to your fingertips. With SpeakWize, you can automatically generate summaries, search for specific keywords in the audio, identify speaker diarisation, and easily export your transcripts to other applications. Make podcasting easier and more efficient with SpeakWize!</p>
            <div class="container flex flex-col justify-center items-center">
                <NuxtLink to="/subscribe" class="mt-4">
                    <button class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
                        Apply for early access <Icon name="mdi:clipboard-text-clock" />
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template> -->
