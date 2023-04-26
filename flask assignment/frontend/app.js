import router from '../router/index.js'
import store from '../vuex/index.js'
import Main from '../Main.js'

new Vue({
  el: '#app',
  template: `<div> <Main /> </div>`,
  data: {},
  components: {
    Main
  },
  router,
  store,
})
