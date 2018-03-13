<template>
  <button v-on:click="$emit('click')">{{ button.text }}</button>
</template>

<script>
  export default {
    props: {
      button: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang='scss'>
    button {
      cursor: pointer;
      font-size: 16px;
      padding: 10px;
      text-transform: uppercase;
      width: 200px;
    }
</style>
