/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Components
import App from './App.vue'

// Composables
const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)
app.use(createPinia());
app.mount('#app')
