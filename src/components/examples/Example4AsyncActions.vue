<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAsyncExampleStore } from "@/stores/examples/4-async-actions";

const store = useAsyncExampleStore();
const { isLoading, error } = storeToRefs(store);
</script>
<template>
	<section class="example-card">
		<h3>Exempel 4 – Async actions</h3>
		<div class="actions">
			<button @click="store.fetchPosts" :disabled="isLoading">
				Hämta inlägg
			</button>
			<button @click="store.reset" :disabled="isLoading">Återställ</button>
		</div>

		<p v-if="isLoading" class="info">Laddar...</p>
		<p v-else-if="error" class="error">{{ error }}</p>

		<ul v-if="!isLoading && store.posts.length">
			<li v-for="post in store.posts" :key="post.id">
				{{ post.title }}
			</li>
		</ul>
		<p v-else-if="!isLoading" class="info">Inga inlägg än.</p>
	</section>
</template>

<style scoped>
.example-card {
	border: 1px solid #ffe2b5;
	border-radius: 8px;
	padding: 1rem;
	background: #fff9ef;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.actions {
	display: flex;
	gap: 0.5rem;
}

.info {
	color: #6b7280;
}

.error {
	color: #b91c1c;
}
</style>
