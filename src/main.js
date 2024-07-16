import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AddTask from './AddTask.vue'
import ToggleButton from './ToggleButton.vue'
createApp(App, AddTask, ToggleButton).mount('#app')
//const useLocalStorageValue = (key, defaultValue) => {
 // const value = Vue.ref(localStorage.getItem(key) ?? defaultValue)
//  Vue.watch(value, (newValue) => {
 //   localStorage.setItem(key, newValue)
//  })
//  return value
//}