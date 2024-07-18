<template>
  <div id="AddTask">
    <button @click="addTask">Add New Task</button>
    <button @click="setVariable">Clear List</button>
    <ol>
      <li v-for="(task, index) in tasks" :key="index">
        Task: {{ task }}
        <ToggleButton />
        <DeleteTask :taskIndex="index" @delete-task="deleteTask" />
      </li>
    </ol>
  </div>
</template>
<script>
import ToggleButton from './ToggleButton.vue';
import DeleteTask from './DeleteTask.vue';
import { onMounted } from 'vue';

export default {
  components: {
    ToggleButton,
    DeleteTask
  },
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
      this.updateLocalStorage(); // Update local storage only once after the array is changed
    },
    setVariable() {
      this.tasks = [];
      this.updateLocalStorage(); // Update local storage only once after the array is changed
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage(); // Update local storage only once after the array is changed
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },
  mounted() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
};
</script>


<style>
button {
  display: flex;
  justify-content: space-between;
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

.deleter {
  display: flex;
  justify-content: flex-end;
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

li:hover {
  background-color: #7A0B0B;
}

.button2 {
    display: flex;
    justify-content: space-between;
}


</style>
Option 3: M