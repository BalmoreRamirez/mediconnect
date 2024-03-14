<script setup>
import MenuComponent from "./components/MenuComponent.vue";
import BuscadorComponent from "./components/BuscadorComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen w-4/5 mx-auto">
    <!-- Menú en la parte superior -->
    <div class=" text-white py-4">
      <MenuComponent></MenuComponent>
    </div>

    <div class="flex flex-col flex-grow justify-center items-center">
      <!-- Buscador en el medio -->
      <div class="flex justify-center items-center h-80 shadow-md my-5 w-full">
        <BuscadorComponent></BuscadorComponent>
      </div>
    </div>

    <!-- Footer al final -->
    <div class="py-4">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>


<style scoped>

</style>
