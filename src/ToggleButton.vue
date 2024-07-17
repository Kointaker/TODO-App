
<template>
  <label class="switch">
    <input :checked="checked" @change="changeInput" @input="$emit('input', $event.target.checked)" value="1"
      type="checkbox">
    <span class="slider round" />
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

<style>
.switch {
  display: flex;
  justify-content: space-between;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 17px;
  right: -10px;
  bottom: -4.5px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  border: 1px solid #ffffff;
}

.slider:before {
  position: absolute;
  content: "";
  height: 19px;
  width: 19px;
  left: -1px;
  bottom: -2.5px;
  background-color: #000000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: solid 1px #000000;
}

input:checked+.slider {
  background-color: transparent;
}

input:focus+.slider {
  box-shadow: 0 0 1px #EA1313;
}

input:checked+.slider:before {
  -webkit-transform: translateX(31px);
  -ms-transform: translateX(31px);
  transform: translateX(15px);
  background: #81BF3F;
  -webkit-transition: 0.9s;
  transition: 0.9s;
  border: solid 5px #fff;
  height: 19px;
  width: 19px;
  left: 10px;
  right: 7px;
  bottom: -5px;
}

.slider.round {
  border-radius: 24px;
  border-color: #ffffff;
}

.slider.round:before {
  border-radius: 50%;
  border-color: #ffffff;
}
</style>
