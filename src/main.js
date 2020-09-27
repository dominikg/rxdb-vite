import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRxDatabase } from "rxdb/plugins/core"


createApp(App).mount('#app')

try {
  createRxDatabase();
} catch (e) {
  // rxdb import works, otherwise we would not have reached this point
  console.log('rxdb imported, received exception',e);
}