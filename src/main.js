import { createApp } from 'vue'
import App from './App.vue'

import maskio from './v-maskio.js'

const app = createApp(App);
app.directive('maskio', maskio);
app.mount('#app');
