import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import '../src/assets/font_icons/fonts.css'

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
