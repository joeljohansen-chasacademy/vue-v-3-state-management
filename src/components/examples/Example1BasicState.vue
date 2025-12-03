<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBasicStateStore } from "@/stores/examples/1-basic-state";

const store = useBasicStateStore();
const { clickCount, todo } = storeToRefs(store);
</script>

<template>
	<section class="example-card">
		<h3>Exempel 1 – Basic state</h3>
		<p>
			Klickräknare (ref): <strong>{{ clickCount }}</strong>
		</p>
		<button @click="store.increment">Öka räknare</button>

		<div class="todo-box">
			<p>
				Todo (direct access): <strong>{{ store.todo.text }}</strong>
			</p>
			<p>
				Status : <strong>{{ todo.done ? "Klar" : "Pågår" }}</strong>
			</p>
			<label>
				Uppdatera text:
				<input v-model="todo.text" />
			</label>
			<button @click="store.toggleTodo">Växla status</button>
		</div>
	</section>
</template>

<style scoped>
.example-card {
	border: 1px solid #cbd5f5;
	border-radius: 8px;
	padding: 1rem;
	background: #f4f7ff;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.todo-box {
	border-top: 1px dashed #9aa7e0;
	padding-top: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

button {
	width: fit-content;
}
</style>
