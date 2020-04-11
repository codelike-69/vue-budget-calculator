<template>
<div>
  <sui-item-group divided>
    <ExpenseItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :costPerMonth="item.costPerMonth"
    />
  </sui-item-group>
  </div>
</template>

<script>
import ExpenseItem from './ExpenseItem.vue';
// import { mapState } from 'vuex'

export default {
  name: 'ExpenseItemList',
  components: { ExpenseItem },
  computed: {
    items() {
      return this.$store.state.expenses;
    },
  },
};
</script>
