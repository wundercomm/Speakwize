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
        description: '(Por un problema t\u00e9cnico no se escucha bien la voz de un contertulio; pedimos disculpas por el inconveniente y hemos a\u00f1adido subt\u00edtulos para ayudar al oyente)\nHoy hablamos de:\n-La reactivaci\u00f3n del LHC y si puede ser el fin del mundo\n-La evoluci\u00f3n de los holandeses\n-Tormentas solares en Venus\n-Nuevas observaciones de materia oscura\nEn la foto, de izquierda a derecha:',
        link: 'https://www.ivoox.com/4553108',
        audioSrc: 'https://www.ivoox.com/coffee-break-podcast-ep01_mf_4553108_feed_1.mp3'
    },
    {
        title: 'Coffee Break Podcast Ep02',
        description: 'La tertulia semanal en la que nos echamos unas risas mientras repasamos las \u00faltimas noticias de la actualidad cient\u00edfica. En el episodio de hoy: Gravedad arcoiris y relatividad cu\u00e1ntica; materia oscura frente a energ\u00eda oscura; vida extraterrestre y \u00bfmarcianitos de secano? En la foto, de izquierda a derecha: Joserra Ar\u00e9valo, Alfred Rosenberg, Nayra Rodr\u00edguez Eugenio, Antonio Darwich, H\u00e9ctor Socas.',
        link: 'https://www.ivoox.com/4553122',
        audioSrc: 'https://www.ivoox.com/coffee-break-podcast-ep02_mf_4553122_feed_1.mp3'
    },
];
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default defineComponent({
    components: {
        ChatWindow
    }
})
</script>


<template>
    <div class="flex h-screen items-center justify-center bg-gradient">
        <div class="flex-1 w-1/2 h-full">
            <div class="mx-auto max-w-2xl">
                <h1 class="mt-10 text-3xl font-extrabold text-white text-center">
                    We are working on...<br><br>
                    <Icon class="text-7xl" name="mdi:account-hard-hat" />
                </h1>
            </div>
        </div>
        <div class="flex-1 w-1/2 h-full">
            <h1 class="mt-10 text-3xl font-extrabold text-white text-center">ChatWize
                <Icon class="text-5xl" name="mdi:chat-question-outline" />
            </h1>
            <ChatWindow />
        </div>


        <!-- PlayerJS -->
        <div class="w-full absolute bottom-0 text-3xl font-extrabold ">
            <audio controls autoplay="true" controlsList="download" class="w-full">
                <source :src="podcasts[0].audioSrc" type="audio/mpeg">
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
}
</style>