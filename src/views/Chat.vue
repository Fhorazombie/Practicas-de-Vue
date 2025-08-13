<script setup>
import { ref, onMounted } from 'vue';
import conectarOpenAI from '../services/openia.service';

// Chat
const mensaje = ref('');
const respuestas = ref([]);  // Cambié a array para almacenar múltiples respuestas

async function fetchOpenAIResponse(texto) {
    if (!texto.trim()) {
        respuestas.value.push({ usuario: texto, bot: 'Por favor ingresa un mensaje.' });
        return;
    }
    const response = await conectarOpenAI(texto);
  // Agregamos el mensaje del usuario y la respuesta del bot al historial
    respuestas.value.push({ usuario: texto, bot: response });
    mensaje.value = ''; // Limpiamos el input
}
onMounted(() => {
  // Si quieres que mande el primer mensaje automáticamente:
  fetchOpenAIResponse('Hola, ¿cómo estás?');
});
</script>

<template>
    <div id="chat">
        <h1>Chat con OpenAI</h1>
        <div class="w-80 m-auto p-2">
            <input type="text" v-model="mensaje" placeholder="Escribe tu mensaje" />
            <button @click="fetchOpenAIResponse(mensaje)">Enviar</button>
        </div>

        <div v-if="respuestas.length" >
            <h2>Historial del chat:</h2>
            <div v-for="(item, index) in respuestas" :key="index" class="flex flex-col justify-center items-start">
                <p class="self-end max-w-80 rounded-md p-3 bg-blue-950 text-right"><strong>Tú:</strong> {{ item.usuario }}</p>
                <p class="max-w-80 bg-blue-500 rounded-md p-3 text-left"><strong>OpenAI:</strong> {{ item.bot }}</p>
                <hr />
            </div>
        </div>
    </div>
</template>

<style scoped>

#chat {
  background-color: #1c1c1c;
  padding: 1rem;
  border-radius: 10px;
  color: #e0e0e0;
  width: 80vw;
}
</style>