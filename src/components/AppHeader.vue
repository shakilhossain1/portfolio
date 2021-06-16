<template>
  <header class="header bg-skin-blue-light text-white py-4">
    <nav class="container flex items-center justify-between">
      <logo></logo>
      <ul class="md:flex text-base font-semibold space-x-4 hidden">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button class="btn btn-primary hidden md:block">Hire me</button>
      <button id="burger" class="md:hidden focus:outline-none">
        <img src="../assets/hamburger-menu.svg" alt="">
      </button>
    </nav>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: { Logo }
};
</script>
