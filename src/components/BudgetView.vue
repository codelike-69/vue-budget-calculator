<template>
  <div>
    <AddIncome />
    <AddExpense />
    <sui-list v-if="income">
      <sui-list-item>Income: {{ income | currency }}</sui-list-item>
      <sui-divider></sui-divider>
      <sui-list-item v-for="expense in expenses" :key="expense.id">
        <span>{{ expense.title }}: - {{ expense.costPerMonth | currency }}</span>
        <span class="red" v-if="expense.isNecessity">*</span>
      </sui-list-item>
    </sui-list>
    <sui-divider v-if="expenses.length"></sui-divider>
    <div v-if="expenses.length">
      Balance: <span v-bind:class="{ green: balance >=0, red: balance < 0 }">
      {{ balance | currency }}
      </span>
    </div>
  </div>
</template>

<script>

import AddExpense from './AddExpense.vue';
import AddIncome from './AddIncome.vue';

export default {
  name: 'BudgetView',
  created() {
  },
  components: { AddExpense, AddIncome },
  computed: {
    expenses() {
      return this.$store.state.expenses;
    },
    income() {
      return this.$store.state.income;
    },
    balance() {
      return this.$store.getters.balance;
    },
  },
};
</script>
<style scoped>
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
