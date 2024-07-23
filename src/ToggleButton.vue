<template>
  <div>
    <Toggle v-model="internalValue" @change="emitToggle" />
  </div>
</template>

<script>
  import Toggle from '@vueform/toggle'

  export default {
    components: {
      Toggle,
    },
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      internalValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit('update:modelValue', value);
        }
      }
    },
    methods: {
      emitToggle() {
        this.$emit('toggle', this.index, this.internalValue);
      }
    }
  }
</script>

<style src="@vueform/toggle/themes/default.css"></style>
