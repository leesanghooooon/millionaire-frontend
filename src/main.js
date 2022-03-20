import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import 'tui-grid/dist/tui-grid.css'
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import 'tui-pagination/dist/tui-pagination.css';
import { Grid } from '@toast-ui/vue-grid';
import plugin from './plugins/pluginUtil'

Vue.component('grid',Grid)
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.use(BootstrapVue);
