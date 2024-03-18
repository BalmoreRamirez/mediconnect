<script setup>
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import {onMounted, ref} from "vue";
import Button from 'primevue/button';
const visible = ref(false);

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
    <Dialog v-model:visible="visible" modal header="Bienvenido a mediconnect" :style="{ width: '25rem' }">
      <span class="p-text-secondary block mb-5">Ingrese sus credenciales.</span>
      <div class="flex align-items-center gap-3 mb-3">
        <InputText placeholder="Usuario" id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <InputText placeholder="Correo" id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-center gap-2">
        <slot name="footer"></slot>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
</style>