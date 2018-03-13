<template>
  <label>
    Write something down
    <input
      type='text'
      :class='$style.input'
      :value='value'
      v-on='listeners'
    >
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      listeners () {
        return {
          ...this.$listeners,
          input: event => this.$emit('input', event.target.value)
        }
      }
    }
  }
</script>

<style lang='scss' module>

  .input {
    background: black;
    border-style: none;
    border-bottom-style: solid;
    border-bottom: 1px solid #33FFE0;
    color: white;
    font-size: 24px;
    width: 100%;
    &:focus {
      border-bottom: 1px solid #33FFE0;
      outline: none;
    }
  }

</style>
