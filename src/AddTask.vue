<script setup>
  import ToggleButton from './ToggleButton.vue';
</script>
<template>
<div id="AddTask">
    
  <button @click="addTask">Add New Task</button>
    <ul>
      <li v-for="task in tasks" :key="task">Task: {{ task }}<ToggleButton /></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask() {
      let newTask = prompt('Please enter a new task:');
      if (newTask) {
        this.tasks.push(newTask);
      }
    }
  }
};
</script>

<style scoped>
button {
  background-color: #000000;
  border: none;
  color: ghostwhite;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

ul {
  padding: 3;
}

li {
  background: #B23030;
  margin: 11px 0;
  padding: 20px;
  border-radius: 4px;
}
</style>
Option 3: M