<script setup>
import {ref} from "vue";
import ModalComponent from "./ModalComponent.vue";
import Button from "primevue/button";

const visible = ref(false);
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
<template>
  <nav class="w-full bg-white shadow">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo o Marca -->
      <div class="flex items-center text-gray-800">
        <img src="../assets/medi.svg" class="w-16" alt="">
      </div>
      <!-- Menú Principal -->
      <div class="hidden md:flex md:items-center md:space-x-7">
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
        <button class="bg-blue-custom p-2 rounded text-white" @click="visible=true">Login</button>
      </div>

      <div class="md:hidden">
        <button class="text-gray-800 hover:text-blue-custom focus:outline-none" @click="toggleMobileMenu">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div v-if="isMobileMenuOpen" class="block absolute top-16 right-4 bg-white shadow-md rounded py-2 mt-2">
          <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">Inicio</a>
          <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">Médicos</a>
          <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">Hazte Miembro</a>
          <a href="#" class="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">Acerca de Nosotros</a>
        </div>
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