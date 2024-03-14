import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind'

import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import './style.css'
import router from "./router/index.js";

const app = createApp(App)
app.use(router)
app.use(PrimeVue,{
    unstyled: false, pt: Tailwind,
})
app.mount('#app')
