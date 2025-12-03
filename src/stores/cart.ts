import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useProductStore } from './products';

export interface CartItem {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);
  const productStore = useProductStore();

  const detailedItems = computed(() =>
    items.value.map((item) => {
      const product = productStore.products.find((p) => p.id === item.productId);
      return {
        ...item,
        product,
        subtotal: (product?.price ?? 0) * item.quantity,
      };
    }),
  );

  const total = computed(() =>
    detailedItems.value.reduce((sum, item) => sum + item.subtotal, 0),
  );

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0),
  );

  function addToCart(productId: number) {
    const existing = items.value.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({ productId, quantity: 1 });
    }
    console.log('cart:add', { productId, items: items.value });
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter((item) => item.productId !== productId);
    console.log('cart:remove', productId);
  }

  function decrement(productId: number) {
    const existing = items.value.find((item) => item.productId === productId);
    if (!existing) return;
    existing.quantity -= 1;
    if (existing.quantity <= 0) {
      removeFromCart(productId);
    }
    console.log('cart:decrement', { productId, qty: existing?.quantity });
  }

  function clearCart() {
    items.value = [];
    console.log('cart:clear');
  }

  return {
    items,
    detailedItems,
    total,
    totalItems,
    addToCart,
    decrement,
    removeFromCart,
    clearCart,
  };
});

