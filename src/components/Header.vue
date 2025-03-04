<script setup lang="ts">
const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.name">
        <a :href="item.href">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

ul {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  padding: 1rem;
  list-style: none;
}
</style>
