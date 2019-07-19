import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import VueNavigationBar from 'vue-navigation-bar'
import BackToTop from 'vue-backtotop'

Vue.use(BackToTop)
Vue.component('vue-navigation-bar', VueNavigationBar)
Vue.use(BootstrapVue)
