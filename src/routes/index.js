import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.map'

Vue.use(VueRouter)

/* Rotas */
const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router