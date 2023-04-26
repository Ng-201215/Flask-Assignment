export default {
  template: `
  <div id="start" align="center"><br />
      <p id="heading"><I><B> login to our site</B></I></p>   
  <p>Email Id: </p><input type='email' placeholder='email' v-model='userInfo.email' /><br/><br/><br/>
  <p>Password: </p><input type='password' placeholder='password' v-model='userInfo.password' />
  <br/><br/><br/>
  <button @click="loginUser(userInfo)"> LOGIN</button><br />
  <br/><br/><br/>
  </div>`,

  data() {
    return {
      userInfo: {
        email: null,
        password: null,
      },
    }
  },
  methods: {

    ...Vuex.mapMutations(['login', 'logout']),
    ...Vuex.mapActions(['loginUser']),

  },
}
