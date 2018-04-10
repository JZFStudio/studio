// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import '../static/reset.css'
import 'iview/dist/styles/iview.css'
import '../static/style.less'

Vue.use(Vuex);
Vue.use(iView);

const store = new Vuex.Store({});

store.registerModule('app', {
    state: {
        status: 'init'
    },
    mutations: {
        updateStatus(state, payload) {
            state.status = payload.status;
        }
    }
});

router.beforeEach(function (to, from, next) {
    iView.LoadingBar.start();
    next();
});

router.afterEach(function (to, from) {
    iView.LoadingBar.finish();
    store.commit('updateStatus', {
        status: to.path.substring(to.path.lastIndexOf('/') + 1).toUpperCase(),
    });
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
