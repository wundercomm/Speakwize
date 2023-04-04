<template>
    <div class="chat-window rounded">
        <ul class="chat-messages">
            <li v-for="(message, index) in messages" :key="index">
                {{ message.text }}
            </li>
        </ul>
        <div class="chat-buttons">
            <button @click="clearChat">
                <Icon class="text-xl" name="mdi:trash-can-outline" />
            </button>
        </div>
        <form class="chat-form" @submit.prevent="addMessage">
            <input type="text" v-model="newMessage" placeholder="Write your message here">
            <button type="submit">
                <Icon class="text-xl" name="mdi:send" />
            </button>
        </form>
    </div>
</template>
<style scoped>
.chat-window {
    border: 1px solid #ccc;
    padding: 10px;
    height: 400px;
    overflow-y: scroll;
    background-color: #44475A;
}

.chat-messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.chat-form {
    display: flex;
    margin-top: 10px;
}

.chat-form input[type="text"] {
    flex-grow: 1;
    margin-right: 10px;
    border-radius: 5px;
}

.chat-form button {
    background-color: #007aff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.chat-form button:hover {
    background-color: #0069d9;
}

.chat-messages li {
    color: white;
}

.chat-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.chat-buttons button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.chat-buttons button:hover {
    background-color: #c82333;
}

</style>
<script>
export default {
    data() {
        return {
            messages: [
                { text: 'Hello, how are you?', from: 'agente' },
                { text: 'Do you have any questions?', from: 'agente' },
                // { text: 'Hola', from: 'usuario' },
                // { text: 'Hola, ¿cómo estás?', from: 'agente' },
                // { text: 'Bien, gracias', from: 'usuario' },
                // { text: '¿En qué puedo ayudarte hoy?', from: 'agente' },
                // { text: 'Necesito ayuda con mi cuenta', from: 'usuario' },
                // { text: 'Por supuesto, ¿cuál es el problema?', from: 'agente' }
            ],
            newMessage: ''
        };
    },
    methods: {
        addMessage() {
            this.messages.push({
                text: this.newMessage,
                from: 'usuario'
            });
            this.newMessage = '';
        },
        clearChat() {
            this.messages = [];
        }
    }
};
</script>