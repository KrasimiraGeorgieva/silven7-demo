import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/contact-form.css'
import router from "./router"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
