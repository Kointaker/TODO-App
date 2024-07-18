<template>
  <button @click="$emit('delete-task', taskIndex)">Delete</button>
</template>
<script>
export default {
  props: {
    taskIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>