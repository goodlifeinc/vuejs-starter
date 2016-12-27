// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import App from './App'
import Hello from './components/Hello.vue'
import '../node_modules/vue-material/dist/vue-material.css'
import Article from './components/PageA.vue'
import Page from './components/PageB.vue'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Hello
  }, {
    path: '/article/:id',
    component: Article
  }, {
    path: '/page',
    component: Page
  }, {
    path: '*',
    redirect: '/'
  }]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})
