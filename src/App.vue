<template>
  <div class="min-h-screen">
    <router-view/>
  </div>
  <div class="bottom-0 w-full">
    <FooterComponent></FooterComponent>
  </div>
</template>
<script setup>
import FooterComponent from "./components/FooterComponent.vue";
</script>