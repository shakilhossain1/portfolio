<template>
  <header class="bg-gradient-to-br from-skin-blue-light to-skin-blue-dark">
    <app-navigation></app-navigation>
    <hr class="border-gray-300 opacity-30" />
    <showcase></showcase>
  </header>
  <main>
    <app-services></app-services>
  </main>
  <footer>this is footer</footer>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import AppNavigation from "./components/AppNavigation.vue";
import Showcase from "./components/Showcase.vue";
import AppServices from "./components/AppServices.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
