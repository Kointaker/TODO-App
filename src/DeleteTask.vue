
<template>
  <div class="task-item">
    <span>{{ task.name }}</span>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['task', 'index'],
  methods: {
    deleteTask() {
      this.$emit('delete', this.index);
    }
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>