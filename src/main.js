import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AddTask from './AddTask.vue'
import ToggleButton from './ToggleButton.vue'
createApp(App, AddTask, ToggleButton).mount('#app')