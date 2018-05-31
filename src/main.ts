import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

class TypescriptDemo {
  public attr : string
}

new Vue({
  render: h => h(App)
}).$mount('#app')
