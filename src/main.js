/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';
import VueCurrencyFilter from 'vue-currency-filter';
import VueCurrencyInput from 'vue-currency-input';
import App from './App.vue';
import 'semantic-ui-css/semantic.min.css';
import store from './store/store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(SuiVue);
Vue.use(VueCurrencyInput);
Vue.use(VueCurrencyFilter, {
	symbol: '€', // get from settings or location
	thousandsSeparator: '',
	fractionCount: 2,
	fractionSeparator: ',',
	symbolPosition: 'back',
	symbolSpacing: true
});

const Test = { template: '<div>foo</div>' };

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
