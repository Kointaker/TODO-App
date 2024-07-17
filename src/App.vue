
<script setup>
const msg = 'To-do App';
import AddTask from './AddTask.vue';
//import ToggleButton from './ToggleButton.vue';//
//import DeleteTask from './DeleteTask.vue';//

</script>

<template>
  
  <h1 style="text-align: center;">
    {{ msg }}
  </h1>

<h3 style="text-align: center;">
INSTRUCTIONS:
  press the Add New Task button to add a new task. Click the slider to mark a task as Complete. Hover over a task and click to delete a task.
  </h3>
  <AddTask />


</template>

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