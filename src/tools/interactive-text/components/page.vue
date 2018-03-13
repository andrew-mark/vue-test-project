<template>
  <div class='content'>

    <Input
      v-model='text'
      placeholder='Shhh. Tell me..'
      @keydown.enter='strikeLine'
    />

    <span class='text-wrap'>
      <p class='text'>{{text}}</p>
    </span>

  </div>
</template>

<script>
  import Input from './input.vue'

  let nextButton = 0;
  let nextImage = 0;

  export default {
    data () {
      return {
        text: '',
      }
    },
    components: {
      Input
    },
    methods: {
      strikeLine() {
        let word = document.querySelector('.text-wrap');
        word.style.textDecoration = 'line-through';
        word.style.color = 'white';
      }
    }
  }
</script>

<style lang='scss'>
  .text {
    color: #33C4FF;
    font-size: 100px;
    word-wrap: break-word;
  }
</style>
