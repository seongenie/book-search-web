import Vue from 'vue';
import Router from 'vue-router';
import MainContainer from '../components/MainContainer';
import Login from '../components/contents/login/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/book', component: MainContainer },
  ],
});
