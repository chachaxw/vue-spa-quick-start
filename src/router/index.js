import Vue from 'vue';
import Router from 'vue-router';
import UserRoutes from './user';
import Business from './business';
/* eslint-disable */

Vue.use(Router);

const routes = [].concat(UserRoutes, Business);

export default new Router({
  routes
});
