import FetchFunction from '../FetchFunc.js'
import ApiUrl from '../config.js'

export default {
  template: `<div align="center">
  <h1>Welcome to our site, user {{userArray.username}}</h1>
  <button @click="logoutUser" >Signout</button>
  </div>`,

  data() {
    return{
    userArray:null
  }
  },

  methods: {
    ...Vuex.mapMutations(['login', 'logout']),
    ...Vuex.mapActions(['logoutUser']),
  },

  mounted() {
    if (this.$store.state.loggedIn === false) {
      this.$router.push({ name: 'login' })
    }
    else{
    FetchFunction({ url: `${ApiUrl}/users/${this.$route.params.id}`, authRequired: true })
      .then((data) => {
        this.userArray = data
        console.log(this.userArray)
      })
      .catch((err) => {
        this.error = err.message
        console.log(err.message)
      })

    }}

}