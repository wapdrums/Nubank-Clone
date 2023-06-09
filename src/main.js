import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueCurrencyFilter from 'vue-currency-filter'
import VueDragscroll from 'vue-dragscroll'
import store from './store'

import 'boxicons'
import './assets/css/index.css'
import 'animate.css'

Vue.use(VueDragscroll)
Vue.use(VueCurrencyFilter, {
  symbol : 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})
Vue.use(VueMeta, { refreshOnceOnNavigation: true })
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
