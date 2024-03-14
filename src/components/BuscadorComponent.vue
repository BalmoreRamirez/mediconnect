<script setup>
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
const value1 = ref(null);
</script>

<template>
  <div class="card flex flex-wrap justify-content-center gap-3">
    <IconField class="space-x-3">
      <InputText v-model="value1" placeholder="Buscar por especialidad"/>
      <Button class="bg-blue-custom">Buscar</Button>
    </IconField>
  </div>
</template>

<style scoped>

</style>