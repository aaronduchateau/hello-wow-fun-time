import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SimpleCard from "@/components/SimpleCard.vue";


createApp(App)
.component('SimpleCard',SimpleCard)
    .use(router).mount('#app')
