<template>
  <div class='draggable app'>
    <Header />

    <div class='buttons'>
      <Buttons v-for='button in buttons' :class='button.class' @click='button.function' :key='button.id' :button='button'/>
    </div>

    <div class='divs'>
      <Draggable v-model='divs' v-if='showImages'>
        <Divs v-for='div in divs' :key='div.id' :div='div' class='div' />
      </Draggable>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from '../../common/header.vue'
import Divs from './components/divs.vue'
import Buttons from './components/buttons.vue'
import Draggable from 'vuedraggable';
import Footer from '../../common/footer.vue'

let nextButton = 0;
let nextImage = 0;

export default {
  name: 'draggable',
  data () {
    return {
      showImages: false,
      buttons: [
        {
          id: nextButton++,
          class: 'blue',
          text: 'click me!',
          function: () => {
            alert('No the other one!');
          }
        },
        {
          id: nextButton++,
          class: 'green',
          text: 'No click me!!',
          function: () => {
            this.showImages = !this.showImages;
          }
        }
      ],
      divs: [
        {
          id: nextImage++,
          class: 'red',
          text: 'A red box'
        },
        {
          id: nextImage++,
          class: 'blue',
          text: 'A blue box'
        },
        {
          id: nextImage++,
          class: 'green',
          text: 'A green box'
        },
        {
          id: nextImage++,
          class: 'yellow',
          text: 'This is not a yellow box'
        }
      ]
    }
  },
  components: {
    Header,
    Divs,
    Buttons,
    Draggable,
    Footer
  }
}
</script>

<style lang='scss'>
  @import '../../assets/styles/base.css';

  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 100px auto;
    max-width: 600px;
    button.blue {
      background-color: #33C4FF;
      border-color: #33C4FF;
    }
    button.green {
      background: #33FFE0;
      border-color: #33FFE0;
    }
  }
  .divs {
    .div {
      color: white;
      display: table-cell;
      font-size: 25px;
      height: 200px;
      text-align: center;
      vertical-align: middle;
      width: 200px;
      &.red{
        background-color: #FF3333;
      }
      &.blue{
        background-color: blue;
      }
      &.green{
        background-color: #33FFE0;
      }
      &.yellow{
        background-color: #FFFF33;
        color: black;
      }
    }
  }

</style>
