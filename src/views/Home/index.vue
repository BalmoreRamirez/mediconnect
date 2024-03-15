<script setup>
import BuscadorComponent from "../../components/BuscadorComponent.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import MenuComponent from "../../components/MenuComponent.vue";
</script>

<template>

  <div class="min-h-screen flex flex-col">

    <div class="bg-light-white shadow-md">
      <MenuComponent></MenuComponent>
    </div>

    <div class="w-4/5 mx-auto mb-10 mt-8 ">
      <div class="flex justify-center items-center h-80 shadow-md  w-full bg-white rounded">
        <BuscadorComponent></BuscadorComponent>
      </div>
    </div>

    <div class="absolute bottom-0 w-full">
      <FooterComponent></FooterComponent>
    </div>

  </div>

</template>

<style scoped>

</style>