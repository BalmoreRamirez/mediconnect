<script setup>
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import InputMask from 'primevue/inputmask';
import Dialog from 'primevue/dialog';
import {onMounted, ref} from "vue";

const visible = ref(false);

const data = ref({
  name: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
  checked: ""
})

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  visible.value = props.show
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal :style="{ width: '50vw' }">
      <div class="text-center my-5">
        <slot name="header"></slot>
      </div>
      <div class="flex justify-center">
        <div class="w-full max-w-md space-y-3">
          <div class="md:flex md:justify-between">
            <div class="md:w-1/2 mb-4 md:mr-2">
              <label for="username">Nombre</label>
              <InputText v-model="data.name" class="w-full"/>
            </div>
            <div class="md:w-1/2 mb-4 md:ml-2">
              <label for="username">Apellido</label>
              <InputText v-model="data.lastName" class="w-full"/>
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <div class="md:w-1/2 mb-4 md:mr-2">
              <label for="username">Email</label>
              <InputText v-model="data.email" class="w-full"/>
            </div>
            <div class="md:w-1/2 mb-4 md:ml-2">
              <label for="username">Telefono</label>
              <InputMask v-model="data.phone" mask="(999) 9999-9999" placeholder="(999) 9999-9999" class="w-full"/>
            </div>
          </div>
          <div class="md:flex md:justify-between">
            <div class="md:w-1/2 mb-4 md:mr-2">
              <label for="username">Contraseña</label>
              <Password v-model="data.password" :feedback="false" class="w-full"/>
            </div>
            <div class="md:w-1/2 mb-4 md:ml-2">
              <label for="username">Repetir contraseña</label>
              <Password v-model="data.repeatPassword" :feedback="false" class="w-full"/>
            </div>
          </div>
          <div class="md:flex md:justify-center flex-col text-center">
            <div class="flex mb-5 mx-auto">
              <Checkbox v-model="data.checked" binary variant="filled"/>
              <label for="ingredient1" class="ml-2"> Aceptar Políticas de Privacidad</label>
            </div>
            <span class="text-gray-500 text-xs">Al marcar esta casilla, confirmo que he leído y acepto laspolíticas de privacidad de MediConnect.</span>
          </div>
          <p class="text-center pb-5">Si ya tiene un usuario, <a class="text-blue-custom" href="#">ingrese aqui</a></p>
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <slot name="footer"></slot>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
</style>