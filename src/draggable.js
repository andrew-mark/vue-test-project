import Vue from 'vue'
import Draggable from './tools/draggable/draggable.vue'
import VueDraggable from 'vue-draggable'

Vue.use(VueDraggable)

Array.from(document.querySelectorAll('.draggable')).forEach((draggable) => {
  new Vue({
    el: draggable,
    render: h => h(Draggable)
  })
})
