import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface Expense {
  id: number;
  label: string;
  amount: number;
  category: 'mat' | 'boende' | 'nöje';
}

export const useGettersExampleStore = defineStore('example-getters', () => {
  const expenses = ref<Expense[]>([
    { id: 1, label: 'Matbutiken', amount: 250, category: 'mat' },
    { id: 2, label: 'Hyra', amount: 6500, category: 'boende' },
    { id: 3, label: 'Bio', amount: 150, category: 'nöje' },
    { id: 4, label: 'Fika', amount: 70, category: 'nöje' },
  ]);

  // computed: summera allt
  const total = computed(() =>
    expenses.value.reduce((sum, item) => sum + item.amount, 0),
  );

  // computed: filtrera kategorier
  const entertainment = computed(() =>
    expenses.value.filter((item) => item.category === 'nöje'),
  );

  const entertainmentTotal = computed(() =>
    entertainment.value.reduce((sum, item) => sum + item.amount, 0),
  );

  function addExpense(expense: Expense) {
    expenses.value.push(expense);
    console.log('addExpense ->', expense);
  }

  return {
    expenses,
    total,
    entertainment,
    entertainmentTotal,
    addExpense,
  };
});

