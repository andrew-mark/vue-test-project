<template>
  <div class='interactive-text app'>
    <Header />
    <Page />
    <Footer/>
  </div>
</template>

<script>
  import Header from '../../common/header.vue'
  import Page from './components/page.vue'
  import Footer from '../../common/footer.vue'

  export default {
    name: 'interactive-text',
    components: {
      Header,
      Page,
      Footer
    }
  }
</script>

<style lang='scss'>
  @import '../../assets/styles/base.css';

</style>
