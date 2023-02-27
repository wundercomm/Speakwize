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

const podcasts = [
    {
        title: 'Coffee Break Podcast Ep01',
        description: '...',
        link: 'https://www.ivoox.com/4553108',
        audioSrc: 'https://www.ivoox.com/coffee-break-podcast-ep01_mf_4553108_feed_1.mp3'
    },
    {
        title: 'Otro podcast',
        description: '...',
        link: 'https://www.ejemplo.com',
        audioSrc: 'https://www.ejemplo.com/audio.mp3'
    },
];

</script>

<template>
    <div class="flex h-screen items-center justify-center bg-background-color">
        <div class="absolute">
            <h1 class="mt-10 text-3xl font-extrabold text-white text-center">
                <a href="https://www.ivoox.com/4553108">
                    Coffee Break Podcast Ep01
                </a>
            </h1>
            <p class="text-foreground-color font-mono text-xl my-8 mx-8 p-8">description": "(Por un problema t\u00e9cnico no
                se escucha bien la voz de un contertulio; pedimos disculpas por el inconveniente y hemos a\u00f1adido
                subt\u00edtulos para ayudar al oyente)\nHoy hablamos de:\n-La reactivaci\u00f3n del LHC y si puede ser el
                fin del mundo\n-La evoluci\u00f3n de los holandeses\n-Tormentas solares en Venus\n-Nuevas observaciones de
                materia oscura\nEn la foto, de izquierda a derecha:</p>
            <div class="flex justify-center mt-20">
                <button @click="logout"
                    class="dark:bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
            </div>
        </div>
        <div class="w-full absolute bottom-0 text-3xl font-extrabold ">
            <audio controls autoplay="true" controlsList="download" class="w-full">
                <source src="https://www.ivoox.com/coffee-break-podcast-ep01_mf_4553108_feed_1.mp3" type="audio/mpeg">
                Tu navegador no soporta la reproducción de audio.
            </audio>
        </div>
    </div>
</template>

<style>
audio::-webkit-media-controls-enclosure {
    display: flex;
    align-items: center;
    background-color: #44475A;
    border-radius: 0px;

}

/* Cambia el tamaño y color del tiempo de reproducción actual */
audio::-webkit-media-controls-current-time-display {
    font-size: 1.2em;
    font-weight: 600;
    color: #f8f8f2;
    text-shadow: none;
}

/* Cambia el tamaño y color del tiempo restante */
audio::-webkit-media-controls-time-remaining-display {
    font-size: 1.2em;
    font-weight: 600;
    text-shadow: none;
    color: #f8f8f2;
}</style>