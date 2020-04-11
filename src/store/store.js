/* eslint-disable */

import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
});

export default new Vuex.Store({
	state: {
		expenses: [],
		income: 0
	},

	getters: {
		balance: (state) => {
			const totalExpenses = state.expenses.reduce((acc, obj) => {
				return acc + obj.costPerMonth;
			}, 0);
			return state.income - totalExpenses;
		}
	},

	mutations: {
		addExpense(state, payload) {
			state.expenses = [ ...state.expenses, payload ];
		},
		deleteExpense(state, payload) {
			state.expenses = state.expenses.filter((e) => e.id !== payload);
		},
		clearExpenses(state) {
			state.expenses = [];
		},
		addIncome(state, payload) {
			state.income = payload;
		}
	},
	plugins: [ vuexLocal.plugin ]
});
