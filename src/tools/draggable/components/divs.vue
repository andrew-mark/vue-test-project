<template>
  <div :class='div.class'>
    <p>{{div.text}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      div: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang='scss'>

</style>
