import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Material Design Lite directive
Vue.directive('mdl', {
  bind: ($el) => {
    if (window.componentHandler) window.componentHandler.upgradeElement($el);
  },
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
