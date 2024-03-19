<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import perfil from "../../assets/perfil.jpeg";
import MenuComponent from "../../components/MenuComponent.vue";
import {ref} from "vue";

const buscar = ref()
</script>

<template>

  <div class="bg-light-white shadow-md">
    <MenuComponent></MenuComponent>
  </div>
  <div class="w-[80%] mx-auto bg-bg-primary flex justify-center items-start mt-5 py-5">
    <div class="w-[50%] bg-bg-secondary shadow-md rounded p-10 space-y-3">
      <IconField class="flex justify-start items-center space-x-3 ">
        <InputText class="w-[65%]" v-model="buscar" placeholder="Ingrese la especialidad que busca"/>
        <div class="w-[25%]">
          <Button class="bg-blue-custom w-full justify-center">Buscar <i class="pi pi-angle-right"></i></Button>
        </div>
      </IconField>
      <div class="w-full">
        <div class="w-[50%] p-3 shadow">
          <div class="flex justify-start">
            <div class="w-8 mr-3">
              <img class="rounded-full" :src="perfil" alt="Imagen de perfil" />
            </div>
            <div class="text-left">
              <p class="text-xs">Diana Hernandez</p>
              <p class="text-xs">Dra general</p>
            </div>
          </div>
          <div class="py-3 flex">
            <!--icon ubicacion-->
            <i class="pi pi-map-marker text-blue-custom"></i>
            <p class="text-xs text-gray-700 ml-2">
              Paseo General Escalón &, Alameda Franklin
              Delano Roosevelt, San Salvador
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[50%] h-auto bg-bg-secondary">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15505.678886345293!2d-89.2372027!3d13.69301055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330410eacae2d%3A0xf3bd10411c7f3afb!2sMonumento%20al%20Divino%20Salvador%20del%20Mundo!5e0!3m2!1ses-419!2ssv!4v1710797369045!5m2!1ses-419!2ssv"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>
