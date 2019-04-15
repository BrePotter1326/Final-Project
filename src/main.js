import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Article from './components/ArticleSearch.vue'
import Top from './components/Topstories.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/Article Search', component: Article },
  { path: '/Top stories', component: Top },
  { path: '/Home', component: Home }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
