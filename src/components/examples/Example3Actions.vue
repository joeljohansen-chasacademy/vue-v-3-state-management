<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useActionsExampleStore } from "@/stores/examples/3-actions";

const store = useActionsExampleStore();
const { unreadCount } = storeToRefs(store);
const newMessage = ref("");

function handleAdd() {
	store.addMessage(newMessage.value);
	newMessage.value = "";
}
</script>
<template>
	<section class="example-card">
		<h3>Exempel 3 – Actions</h3>
		<p>
			Olästa meddelanden: <strong>{{ unreadCount }}</strong>
		</p>

		<form @submit.prevent="handleAdd">
			<input v-model="newMessage" placeholder="Skriv ett meddelande" required />
			<button type="submit">Lägg till</button>
			<button type="button" @click="store.clear">Töm alla</button>
		</form>

		<ul>
			<li
				v-for="message in store.messages"
				:key="message.id"
				:class="{ read: message.read }"
			>
				{{ message.text }}
				<button v-if="!message.read" @click="store.markAsRead(message.id)">
					Markera som läst
				</button>
			</li>
		</ul>
	</section>
</template>

<style scoped>
.example-card {
	border: 1px solid #c7f5d6;
	border-radius: 8px;
	padding: 1rem;
	background: #f3fff7;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

form {
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
}

ul {
	padding-left: 1.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.read {
	opacity: 0.6;
}
</style>
