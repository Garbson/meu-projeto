import Vue from 'vue';
import Router from 'vue-router';
import Pedidos from '@/views/PedidosView.vue'; 
import Dashboard from '@/views/DashboardView.vue'; 

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: Pedidos,
    },
    // Adicione outras rotas aqui
  ],
});
