import Vue from 'vue';
import Router from 'vue-router';
import BudgetView from '../components/BudgetView.vue';
import ExpenseItemList from '../components/ExpenseItemList.vue';

/* eslint-disable */
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'BudgetView',
			component: BudgetView
		},
		{
			path: '/budget',
			name: 'BudgetView',
			component: BudgetView
		},
		{
			path: '/expense',
			name: 'ExpenseItemList',
			component: ExpenseItemList
		}
	]
});
