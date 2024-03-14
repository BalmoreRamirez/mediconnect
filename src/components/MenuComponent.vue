<script setup>
import {ref} from "vue";
import ModalComponent from "./ModalComponent.vue";
import Button from "primevue/button";
const visible = ref(false);
</script>
<template>
  <nav class="w-4/5 mx-auto">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo o Marca -->
      <div class="flex items-center text-gray-800">
        <img src="../assets/medi.svg" class="w-16" alt="">
      </div>
      <div class="flex items-center space-x-7">
        <a href="#" class="text-gray-800 hover:text-blue-custom flex items-center">
          <i class="pi pi-home mr-1"></i>
          Inicio
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-custom flex items-center">
          <i class="pi pi-user-md mr-1"></i>
          Médicos
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-custom flex items-center">
          <i class="pi pi-user-plus mr-1"></i>
          Hazte Miembro
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-custom flex items-center">
          <i class="pi pi-users mr-1"></i>
          Acerca de Nosotros
        </a>
      </div>
      <div class="flex items-center text-gray-800">
        <button class="bg-blue-custom p-2 rounded text-white" @click="visible = true">Login
          <i class="pi pi-angle-right"></i></button>
      </div>
    </div>
  </nav>
  <ModalComponent :show="visible" v-if="visible">
    <template #footer>
      <Button type="button" label="Cancelar" severity="secondary" @click="visible = false"></Button>
      <Button class="bg-blue-custom" type="button" label="Ingresar" @click="visible = false"></Button>
    </template>
  </ModalComponent>

</template>


<style scoped>

</style>