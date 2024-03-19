<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import perfil from "../../assets/perfil.jpeg";
import MenuComponent from "../../components/MenuComponent.vue";
import {ref} from "vue";
import HeaderComponent from "../../components/HeaderComponent.vue";
import BannerComponent from "../../components/BannerComponent.vue";

const buscar = ref()
</script>
<template>
  <HeaderComponent></HeaderComponent>
  <div class="bg-light-white shadow-md">
    <MenuComponent></MenuComponent>
  </div>
  <BannerComponent></BannerComponent>
  <div class="w-full md:w-4/5 mx-auto bg-bg-primary flex flex-col md:flex-row justify-center items-start mt-5 py-5">
    <!--primer bloque-->
    <div class="w-full md:w-1/2 bg-bg-secondary shadow-md rounded p-10 space-y-3 md:mr-2">
      <div class="flex justify-start items-center space-x-3">
        <input type="text" class="w-3/5 md:w-2/3 bg-gray-200 px-3 py-2 rounded" v-model="buscar"
               placeholder="Ingrese la especialidad que busca"/>
        <button class="bg-blue-custom py-2 px-4 text-white rounded-md">Buscar <i class="pi pi-angle-right"></i></button>
      </div>
      <div class="w-full">
        <div class="w-3/5 p-3 shadow">
          <div class="flex justify-start items-center">
            <div class="w-8 mr-3">
              <img class="rounded-full" :src="perfil" alt="Imagen de perfil"/>
            </div>
            <div class="text-left">
              <p class="text-xs">Diana Hernandez</p>
              <p class="text-xs">Dra general</p>
            </div>
          </div>
          <div class="py-3 flex items-center">
            <i class="pi pi-map-marker text-blue-custom"></i>
            <p class="text-xs text-gray-700 ml-2">
              Paseo General Escalón &, Alameda Franklin
              Delano Roosevelt, San Salvador
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--segundo bloque-->
    <div class="w-full md:w-1/2 h-auto bg-bg-secondary mt-5 md:mt-0">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15505.678886345293!2d-89.2372027!3d13.69301055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330410eacae2d%3A0xf3bd10411c7f3afb!2sMonumento%20al%20Divino%20Salvador%20del%20Mundo!5e0!3m2!1ses-419!2ssv!4v1710797369045!5m2!1ses-419!2ssv"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>
