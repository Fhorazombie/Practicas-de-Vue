<script setup>
import { ref, onMounted } from 'vue';
import obtenerPublicaciones from './services/publicacion.service';
import conectarOpenAI from './services/openia.service';

// Publicaciones
const publicaciones = ref([]);

// Chat
const mensaje = ref('');
const respuestas = ref([]);  // Cambié a array para almacenar múltiples respuestas

async function fetchPublicaciones() {
    publicaciones.value = await obtenerPublicaciones();
}

async function fetchOpenAIResponse(texto) {
  const response = await conectarOpenAI(texto);
  // Agregamos el mensaje del usuario y la respuesta del bot al historial
  respuestas.value.push({ usuario: texto, bot: response });
  mensaje.value = ''; // Limpiamos el input
}

onMounted(() => {
  fetchPublicaciones();
  // Si quieres que mande el primer mensaje automáticamente:
  fetchOpenAIResponse('Hola, ¿cómo estás?');
});
</script>

<template>
  <div>
    <div id="chat">
      <h1>Chat con OpenAI</h1>
      <input type="text" v-model="mensaje" placeholder="Escribe tu mensaje" />
      <button @click="fetchOpenAIResponse(mensaje)">Enviar</button>

      <div v-if="respuestas.length">
        <h2>Historial del chat:</h2>
        <div v-for="(item, index) in respuestas" :key="index">
          <p><strong>Tú:</strong> {{ item.usuario }}</p>
          <p><strong>OpenAI:</strong> {{ item.bot }}</p>
          <hr />
        </div>
      </div>
    </div>

    <ul>
      <li v-for="publicacion in publicaciones" :key="publicacion.id">
        {{ publicacion.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#chat {
  background-color: #1c1c1c;
  padding: 1rem;
  border-radius: 10px;
  color: #e0e0e0;
}

input {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

button {
  background-color: #ff79c6;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #ff92d0;
}

hr {
  border-color: #444;
}
</style>
