<script setup>
    import { ref, onMounted } from 'vue';
    import obtenerPublicaciones from '../services/publicacion.service';

    // Publicaciones
    const publicaciones = ref([]);

    async function fetchPublicaciones() {
        publicaciones.value = await obtenerPublicaciones();
    }

    onMounted(() => {
        fetchPublicaciones();
    });
</script>
<template>
    <h1>Publicaciones</h1>
    <ul>
      <li v-for="publicacion in publicaciones" :key="publicacion.id">
        {{ publicacion.title }}
      </li>
    </ul>
</template>