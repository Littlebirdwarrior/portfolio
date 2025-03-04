# Notes COPILOTE

Je vais vous aider à structurer votre portfolio Vue.js. Voici la solution étape par étape :

1. Créer les composants nécessaires dans un dossier components
2. Modifier App.vue pour intégrer la structure principale
3. Créer une feuille de style globale
4. Organiser les composants de manière logique

## App.vue

Restructurer le composant principal pour inclure tous les sections :

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Animation from './components/Animation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <Navigation />
    <Animation />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
...
}

main {
...
}
</style>