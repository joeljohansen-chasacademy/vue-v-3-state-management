<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const { profile, isLoggedIn } = storeToRefs(store);

const name = ref("Joel Janson");
const email = ref("joeljohansen@chasacademy.se");
const newEmail = ref("");

function login() {
	store.login(name.value, email.value);
	newEmail.value = email.value;
}

function updateEmail() {
	if (!newEmail.value) return;
	store.updateEmail(newEmail.value);
}

watch(
	() => profile.value?.email,
	(value) => {
		if (value) newEmail.value = value;
	}
);
</script>
<template>
	<section class="demo-card">
		<h2>Användare</h2>

		<div v-if="isLoggedIn" class="profile">
			<p><strong>Namn:</strong> {{ profile?.name }}</p>
			<p><strong>Email:</strong> {{ profile?.email }}</p>
			<label>
				Uppdatera email:
				<input v-model="newEmail" type="email" />
			</label>
			<button @click="updateEmail">Spara email</button>
			<button @click="store.logout">Logga ut</button>
		</div>

		<form v-else class="login-form" @submit.prevent="login">
			<label>
				Namn
				<input v-model="name" required />
			</label>
			<label>
				Email
				<input v-model="email" type="email" required />
			</label>
			<button type="submit">Logga in</button>
		</form>
	</section>
</template>

<style scoped>
.demo-card {
	border: 1px solid #d1d5db;
	border-radius: 12px;
	padding: 1rem;
	background: #fff;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.login-form,
.profile {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
</style>
