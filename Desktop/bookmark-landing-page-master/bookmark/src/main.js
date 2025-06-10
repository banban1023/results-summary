import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/commom.less'
import '@/utils/vant-ui'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
