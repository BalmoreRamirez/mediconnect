<script setup>
import BuscadorComponent from "../../components/BuscadorComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import MenuComponent from "../../components/MenuComponent.vue";
</script>

<template>
  <div class="bg-light-white shadow-md">
    <MenuComponent></MenuComponent>
  </div>
  <div class="flex flex-col min-h-screen w-4/5 mx-auto">
    <!-- Menú en la parte superior -->
    <div class="flex flex-col flex-grow justify-center items-center ">
      <!-- Buscador en el medio -->
      <div class="flex justify-center items-center h-80 shadow-md  w-full bg-white">
        <BuscadorComponent></BuscadorComponent>
      </div>
    </div>
  </div>
    <!-- Footer al final -->
    <div class="">
      <FooterComponent></FooterComponent>
    </div>

</template>

<style scoped>

</style>