import Vue from 'vue'
import Checkbox from './tools/checkbox/checkbox.vue'

Array.from(document.querySelectorAll('.checkbox-tool')).forEach((checkbox) => {
  new Vue({
    el: checkbox,
    render: h => h(Checkbox)
  })
})
