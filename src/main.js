import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('snippet',value=>{
  if(!value || typeof(value) !='string' ){
    return ''
  }else{
    value = value.slice(0,30);
    return value
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
