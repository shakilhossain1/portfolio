<template>
  <nav class="container py-4 flex items-center justify-between">
    <logo></logo>
    <ul class="md:flex text-base font-semibold space-x-4 hidden text-white">
      <li><a href="#" class="transition-all duration-150 hover:text-skin-primary">Home</a></li>
      <li><a href="#" class="transition-all duration-150 hover:text-skin-primary">Services</a></li>
      <li><a href="#" class="transition-all duration-150 hover:text-skin-primary">Contact</a></li>
    </ul>
    <button class="btn btn-primary hidden md:block">Hire me</button>
    <button id="burger" class="md:hidden focus:outline-none">
      <img src="../assets/hamburger-menu.svg" alt="" />
    </button>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: { Logo }
};
</script>
