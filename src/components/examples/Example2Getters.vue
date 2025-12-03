<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGettersExampleStore } from "@/stores/examples/2-getters";

const store = useGettersExampleStore();
const { expenses, total, entertainmentTotal } = storeToRefs(store);

function addRandomExpense() {
	const randomAmount = Math.round(Math.random() * 500);
	const categories = ["mat", "boende", "nöje"] as const;
	const category = categories[randomAmount % categories.length] ?? "mat";
	const newExpense = {
		id: Date.now(),
		label: `Spontant köp ${expenses.value.length + 1}`,
		amount: randomAmount,
		category,
	};
	store.addExpense(newExpense);
}
</script>
<template>
	<section class="example-card">
		<h3>Exempel 2 – Getters</h3>
		<p>
			Totalt spenderat (computed): <strong>{{ total }} kr</strong>
		</p>
		<p>
			Nöje (computed chain): <strong>{{ entertainmentTotal }} kr</strong>
		</p>

		<ul>
			<li v-for="expense in expenses" :key="expense.id">
				{{ expense.label }} – {{ expense.amount }} kr ({{ expense.category }})
			</li>
		</ul>

		<button @click="addRandomExpense">Lägg till slumpad utgift</button>
	</section>
</template>

<style scoped>
.example-card {
	border: 1px solid #f7caca;
	border-radius: 8px;
	padding: 1rem;
	background: #fff6f6;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

ul {
	padding-left: 1.25rem;
}
</style>
