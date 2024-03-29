import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import SweetModal from 'sweet-modal-vue/src/plugin.js'

Vue.use(SweetModal);

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.use(VueLodash, { lodash: lodash })

import Index from './views/Index';
import Bio from './views/Bio';
import Albums from './views/Albums';
import Concerts from './views/Concerts';

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/bio',
            name: 'bio',
            component: Bio,
        },
        {
            path: '/albums',
            name: 'albums',
            component: Albums,
        },
        {
            path: '/concerts',
            name: 'concerts',
            component: Concerts,
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0,
        };
    },
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
