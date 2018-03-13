import Vue from 'vue'
import InteractiveText from './tools/interactive-text/interactive-text.vue'

Array.from(document.querySelectorAll('.interactive-text')).forEach((interactiveText) => {
  new Vue({
    el: interactiveText,
    render: h => h(InteractiveText)
  })
})
