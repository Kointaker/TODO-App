<script setup>
const msg = 'Todo App';
import AddTask from './AddTask.vue';
import ToggleButton from './ToggleButton.vue';

</script>

<template>
  
  <h1 style="text-align: center;">
    {{ msg }}
  </h1>
<AddTask />
</template>

