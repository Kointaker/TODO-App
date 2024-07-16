<script setup>
const msg = 'Todo App';
import AddTask from './AddTask.vue';
//import ToggleButton from './ToggleButton.vue';//

</script>

<template>
  
  <h1 style="text-align: center;">
    {{ msg }}
  </h1>


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