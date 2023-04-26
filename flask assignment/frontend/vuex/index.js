import FetchFunction from '../FetchFunc.js'
import router from '../router/index.js'
const store = new Vuex.Store({
  
  state: {
    loggedIn: localStorage.getItem('token') ? true : false,id:""  },

  getters: {
    token(state) {
      if (state.loggedIn === true) {
        return localStorage.getItem('token')

      } else {
        return null
      }
    },
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    },
    logout(state) {
      state.loggedIn = false
    },
  },
  
  actions: {
    async loginUser({ commit,state,dispatch }, user) {
      const res = FetchFunction({
        url: 'http://127.0.0.1:5000/login?include_auth_token',
        init_obj: {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(user),
        },
      })
                                                            
      const a=FetchFunction({ url: `http://127.0.0.1:5000/users`,authRequired: true})
      a.then(
       (data)=>{
        for(var i=0;i<data.length;i++){ 
             console.log(user["email"])
             if(data[i].email===user["email"]){
              state.id=data[i].id
             }
          }
       }).catch((err) => {
        this.error = err.message
        console.log(err.message)
      })
      
    res.then((data) => {
          const authToken = data.response.user.authentication_token
          localStorage.setItem('token', authToken)
          localStorage.setItem('id', state.id)
          commit('login')
            alert('Login Successful, Welcome to Social App !')

          router.push({ name: 'home', params:{id:state.id} }) 
        })
          .catch((err) => {
          console.log(err)
        alert("Login Failed !!")})
          
      },
    logoutUser({ commit }) {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      commit('logout')
      router.push({ name: 'login' })
    },
       }

}
)
export default store