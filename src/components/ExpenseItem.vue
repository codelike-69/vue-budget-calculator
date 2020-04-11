<template>
    <sui-item>
        <sui-item-content>
          <sui-item-header>{{title}}</sui-item-header>
          <sui-item-content>{{costPerMonth | currency}}</sui-item-content>
        </sui-item-content>
        <sui-button type="button" @click.prevent="deleteExpense(id)">
          <sui-icon name="close" />
        </sui-button>
    </sui-item>
</template>

<script>

export default {
  name: 'ExpenseItem',
  props: {
    title: String,
    costPerMonth: Number,
    id: Number,
  },
  methods: {
    deleteExpense(id) {
      this.$store.commit('deleteExpense', id);
    },
  },
};
</script>
