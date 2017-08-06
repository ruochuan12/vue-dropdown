// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Bus from 'URL_plugin/vue-bus';
import clarityIconsVue from 'clarity-icons-vue';
clarityIconsVue.install(Vue);
Vue.use(Bus);
Vue.config.productionTip = false;
// function toThousandslsFilter(num) {
//   return (+num || 0).toString()
//     .replace(/^\-?\d+/g, function (m) {
//       return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
//     });
// }
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});
