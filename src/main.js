import Vue from 'vue'
import DefaultTheme from './layout/DefautTheme.vue'
import router from './routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(DefaultTheme),
  router
}).$mount('#app')
