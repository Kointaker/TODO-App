
<script setup>
import { onMounted } from 'vue';

const msg = 'To-do App';
import AddTask from './AddTask.vue';

</script>

<template>
  <h1 style="text-align: center;">
    {{ msg }}
  </h1>


  <h3 style="text-align: center;">
    INSTRUCTIONS:
    Click the Add New Task button to add a new task. Click the slider to mark a task as Complete. Click the Delete button
    to delete specific tasks. Click the Clear List button to delete ALL tasks.
  </h3>
  
  
  <AddTask />
  

</template>
<script>
  
</script>

<style scoped>
h1 {
  background-color: #000000;
  border: none;
  color: ghostwhite;
  text-align: center;
  padding: 10px 0px;
  text-decoration: none;
  font-size: 85px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}
</style>
