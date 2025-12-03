<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const { detailedItems, total, totalItems } = storeToRefs(cartStore);
</script>
<template>
	<section class="demo-card">
		<header>
			<h2>Kundvagn</h2>
			<p v-if="totalItems">Antal artiklar: {{ totalItems }}</p>
		</header>

		<p v-if="!detailedItems.length" class="info">
			Kundvagnen är tom – lägg till något från produktlistan!
		</p>

		<ul v-else>
			<li v-for="item in detailedItems" :key="item.productId">
				<div>
					<strong>{{ item.product?.name ?? "Okänd" }}</strong>
					<p>{{ item.product?.price ?? 0 }} kr/st</p>
				</div>
				<div class="controls">
					<button @click="cartStore.decrement(item.productId)">-</button>
					<span>{{ item.quantity }}</span>
					<button @click="cartStore.addToCart(item.productId)">+</button>
				</div>
				<div class="subtotal">{{ item.subtotal }} kr</div>
				<button class="link" @click="cartStore.removeFromCart(item.productId)">
					Ta bort
				</button>
			</li>
		</ul>

		<footer v-if="detailedItems.length">
			<strong>Totalt: {{ total }} kr</strong>
			<button @click="cartStore.clearCart">Töm kundvagn</button>
		</footer>
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

ul {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	list-style: none;
	padding: 0;
}

li {
	border: 1px solid #e5e7eb;
	border-radius: 10px;
	padding: 0.75rem;
	background: #f9fafb;
	display: grid;
	grid-template-columns: 2fr auto auto auto;
	align-items: center;
	gap: 0.5rem;
}

.controls {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.subtotal {
	font-weight: 600;
	text-align: right;
}

.info {
	color: #6b7280;
}

.link {
	background: transparent;
	border: none;
	color: #3b82f6;
	text-decoration: underline;
	padding: 0;
}

footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
