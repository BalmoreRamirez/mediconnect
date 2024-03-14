<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import InputText from 'primevue/inputtext';
const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home'
  },
  {
    label: 'Medicos',
    icon: 'pi pi-star'
  },
  {
    label: 'Hazte miembro',
    icon: 'pi pi-envelope',
  },
  {
    label: 'Hacerca de Nosotros',
    icon: 'pi pi-star'
  },
]);

</script>



  <template>
    <nav class="w-4/5 mx-auto">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <!-- Logo o Marca -->
        <div class="flex items-center text-gray-800">
          <img src="../assets/medi.svg" class="w-10" alt="">
        </div>

        <!-- Menú de Navegación -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-800 hover:text-blue-custom flex items-center">
            <i class="pi pi-home mr-1"></i>
            Inicio
          </a>
          <a href="#" class="text-gray-800 hover:text-purple-custom flex items-center">
            <i class="pi pi-user-md mr-1"></i>
            Médicos
          </a>
          <a href="#" class="text-gray-800 hover:bg-blue-500 flex items-center">
            <i class="pi pi-user-plus mr-1"></i>
            Hazte Miembro
          </a>
          <a href="#" class="text-gray-800 hover:text-green-custom flex items-center">
            <i class="pi pi-users mr-1"></i>
            Acerca de Nosotros
          </a>
        </div>
        <div class="flex items-center text-gray-800">
          <button class="bg-blue-custom p-2 rounded text-white" >Login <i class="pi pi-angle-right"></i></button>
        </div>
      </div>
    </nav>


  </template>



<style scoped>

</style>