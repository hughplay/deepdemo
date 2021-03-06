import Vue from 'vue'
import App from './App.vue'

import './assets/styles/index.css';
import router from './router'

// Cheatsheet: https://codehack.dev/vuefontawesomecheatsheet/
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBullhorn, faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
