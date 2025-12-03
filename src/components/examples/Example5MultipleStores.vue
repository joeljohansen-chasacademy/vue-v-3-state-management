<script setup lang="ts">
import { storeToRefs } from "pinia";
import {
	useExampleCartStore,
	useExampleProductStore,
} from "@/stores/examples/5-multiple-stores";

const productStore = useExampleProductStore();
const cartStore = useExampleCartStore();
const { detailedItems, total } = storeToRefs(cartStore);
</script>

<template>
	<section class="example-card">
		<h3>Exempel 5 – Flera stores</h3>

		<div class="columns">
			<div>
				<h4>Produkter</h4>
				<ul>
					<li v-for="product in productStore.products" :key="product.id">
						{{ product.name }} – {{ product.price }} kr
						<button @click="cartStore.addToCart(product.id)">
							Lägg i kundvagn
						</button>
					</li>
				</ul>
			</div>

			<div>
				<h4>Kundvagn</h4>
				<ul>
					<li v-for="item in detailedItems" :key="item.productId">
						{{ item.productName }} × {{ item.quantity }} =
						{{ item.subtotal }} kr
						<button @click="cartStore.removeFromCart(item.productId)">
							Ta bort
						</button>
					</li>
				</ul>
				<p v-if="!detailedItems.length" class="info">Tom kundvagn.</p>
				<p v-else>
					<strong>Summa: {{ total }} kr</strong>
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>
.example-card {
	border: 1px solid #d5ccff;
	border-radius: 8px;
	padding: 1rem;
	background: #f6f3ff;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.columns {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1rem;
}

ul {
	padding-left: 1.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
}

.info {
	color: #6b7280;
}
</style>
