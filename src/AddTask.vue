<template>
  <div id="AddTask">
    <button @click="addTask">Add New Task</button>
    <button @click="Clear">Clear List</button>
    <ol>
      <li v-for="(task, index) in tasks" :key="index">
        Task: {{ task }}
        <ToggleButton :input="Start" @Start="toggle" />
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
      this.updateLocalStorage();
    },
    Clear() {
      this.tasks = [];
      this.updateLocalStorage();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    updateLocalStorageToggle() {
      localStorage.setItem('toggle', JSON.stringify(this.toggle));

    },
    toggle() {
      this.$emit('input', !this.value); // Emit the updated value
      this.updateLocalStorageToggle();
    }
  },
  mounted() {
    const storedTasks = localStorage.getItem('tasks')
    const storedToggle = localStorage.getItem('toggle')
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      if (storedToggle) {
        this.toggle = JSON.parse(storedToggle);
      }
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