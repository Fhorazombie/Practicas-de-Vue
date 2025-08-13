<template>
  
    <router-link to="/">INICIO</router-link> |
    <router-link to="/blog">BLOG</router-link> |
    <router-link to="/chat">CHAT</router-link>
  <div class="w-fit">
    <router-view></router-view>
  </div>
</template>

<style scoped>

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
