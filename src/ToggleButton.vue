<template>
  <label class="switch">
    <input
      :checked="checked"
      @change="changeInput"
      @input="$emit('input', $event.target.checked)"
      value="1"
      type="checkbox"
    >
    <span class="slider round"/>
  </label>
</template>
<script>
export default {
  props: {
    value: { type: Boolean, default: false }
  },
  data() {
    return {
      checked: this.value
    };
  },
  watch: {
    checked(val) {
      this.$emit("input", this.checked);
    }
  },
  methods: {
    changeInput() {
      this.checked = !this.checked;
      this.$emit("input", !this.value);
    }
  }
};
</script>