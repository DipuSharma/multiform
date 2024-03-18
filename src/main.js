import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Components
import App from './App.vue'

// Composables
const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)
app.use(createPinia(pinia));
app.mount('#app')

// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
// import App from './App.vue';
// // import './index.css';

// const app = createApp(App);
// const pinia = createPinia();

// app.use(pinia);
// app.mount('#app');
  
