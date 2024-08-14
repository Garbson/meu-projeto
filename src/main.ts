import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de que o caminho está correto
import vuetify from './plugins/vuetify'; // Se estiver usando Vuetify

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify, // Se estiver usando Vuetify
  render: (h) => h(App),
}).$mount('#app');
