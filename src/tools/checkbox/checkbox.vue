<template>
  <div class='checkbox-tool app'>
    <Header />

    <div>
      <Input
        v-model='checkboxIsTrue'
        :class="{'is-active': checkboxIsTrue}"
        v-on:change='changeClass()'
      />
    </div>

    <Footer/>
  </div>
</template>

<script>
  import Header from '../../common/header.vue'
  import Input from './components/input.vue'
  import Footer from '../../common/footer.vue'

  export default {
    name: 'checkbox',
    data () {
      return {
        checkboxIsTrue: false
      }
    },
    components: {
      Header,
      Input,
      Footer
    },
    methods: {
      changeClass() {
        this.checkboxIsTrue = !this.checkboxIsTrue;
      }
    }
  }
</script>

<style lang='scss'>
  @import '../../assets/styles/base.css';

  .is-active {
    border: 2px solid #33C4FF;
    padding: 10px;
  }

</style>
