<template>
  <div>
    <h2>Add expenses</h2>
    <sui-form>
      <sui-form-field>
        <label for="expense">Expense title</label>
        <input name="expense" v-model="title" placeholder="Add expense title" />
      </sui-form-field>
      <sui-form-field>
        <label for="cost">Cost per month</label>
          <currency-input v-model="costPerMonth" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox v-model="isNecessity" label="Necessity" />
      </sui-form-field>
      <sui-button @click.prevent="addExpense" type="click">Add expense</sui-button>
      <sui-button @click.prevent="clearExpenses" type="click">Clear all expenses</sui-button>
    </sui-form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'AddExpense',
  data() {
    return {
      title: '',
      costPerMonth: 0,
      isNecessity: false
    };
  },
  methods: {
    addExpense() {
      const { title, costPerMonth, isNecessity } = this.$data;
      this.$store.commit('addExpense',
        {
          id: new Date().valueOf(),
          title,
          costPerMonth,
          isNecessity,
        }
      )
      this.title = '';
      this.costPerMonth = 0;
      this.isNecessity = false;
    },
    clearExpenses() {
      this.$store.commit('clearExpenses');
    }
  }
};
</script>
