import Home from '../Home.js'
import Login from '../Login.js'

const routes = [
  { path: '/:id', name: 'home', component: Home },
  { path: '/', name: 'login', component: Login },
]

const router = new VueRouter({
  routes,
})

export default router
