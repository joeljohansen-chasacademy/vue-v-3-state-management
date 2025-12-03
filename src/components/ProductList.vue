<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";

const productStore = useProductStore();
const cartStore = useCartStore();
const { products, isLoading, error } = storeToRefs(productStore);
</script>

<template>
	<section class="demo-card">
		<header>
			<h2>Produktlista</h2>
			<button @click="productStore.fetchProducts" :disabled="isLoading">
				{{ isLoading ? "Laddar..." : "Hämta produkter" }}
			</button>
		</header>

		<p v-if="error" class="error">{{ error }}</p>
		<p v-else-if="!products.length && !isLoading">
			Klicka på knappen för att ladda produkter.
		</p>

		<div class="grid">
			<article v-for="product in products" :key="product.id">
				<img :src="product.image" :alt="product.name" />
				<h3>{{ product.name }}</h3>
				<p>{{ product.description }}</p>
				<p class="price">{{ product.price }} kr</p>
				<button @click="cartStore.addToCart(product.id)" :disabled="isLoading">
					Lägg i kundvagn
				</button>
			</article>
		</div>
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

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1rem;
}

article {
	border: 1px solid #e5e7eb;
	border-radius: 10px;
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	background: #f9fafb;
}

img {
	width: 100%;
	border-radius: 8px;
	object-fit: cover;
}

.price {
	font-weight: bold;
}

.error {
	color: #b91c1c;
}
</style>
