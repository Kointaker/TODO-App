<script setup>
  import ToggleButton from './ToggleButton.vue';
  import DeleteTask from './DeleteTask.vue';
</script>
<template>
<div id="AddTask">
    
  <button @click="addTask">Add New Task</button>
    <ul>
      <li v-for="task in tasks" :key="task" @click="DeleteTask"> Task: {{ task }}<ToggleButton /></li>
    
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
  background-color: #C9C9C9;
}

ul {
  padding: 3;
}

li {
  background: #7A3E3E;
  margin: 11px 0;
  padding: 20px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 1000;
  color: #FFFFFF;
}
  li:hover{
    background-color: #7A0B0B;
    
  }

</style>
Option 3: M