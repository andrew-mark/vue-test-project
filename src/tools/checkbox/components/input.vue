<template>
  <label
    :class='$style.label'>
    To dhl or not to dhl?
    <input
      type='checkbox'
      :class='$style.checkbox'
      v-on:change='changeClass'
    >
  </label>
</template>

<script>
  export default {
    methods: {
      changeClass() {
        this.$emit('change')
      }
    }
  }
</script>

<style lang='scss' module>
  .label {
    color: white;
    font-size: 25px;
  }
  .checkbox {
	  -webkit-appearance: none;
    background-color: white;
    border-radius: 2px;
    height: 30px;
    position: relative;
    vertical-align: middle;
    width: 30px;
    &:checked:after {
      color: #33C4FF;
      content: '\2714';
      font-size: 20px;
      left: 7px;
      position: absolute;
      top: 2px;
    }
  }
</style>
