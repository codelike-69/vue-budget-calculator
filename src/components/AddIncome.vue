<template>
  <div id="add-income-form">
    <h2>Add income</h2>
    <sui-form>
      <sui-form-field>
        <label for="amount">Monthly income after taxes</label>
          <currency-input v-model="income" />
      </sui-form-field>
      <sui-button @click.prevent="addIncome" type="button">Add income</sui-button>
    </sui-form>
  </div>
</template>

<script>
/* eslint-disable */
// why is eslint not working properly here?

export default {
  name: 'AddExpense',
  data() {
    return {
      income: 0,
    };
  },
  methods: {
    addIncome() {
      const { income } = this.$data
      this.$store.commit('addIncome',
          income
      )
    }
  }
};
</script>

<style>
#add-income-form {
  margin-bottom: 2rem;
}
</style>
