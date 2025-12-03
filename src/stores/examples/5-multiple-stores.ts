import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface ExampleProduct {
  id: number;
  name: string;
  price: number;
}

interface ExampleCartItem {
  productId: number;
  quantity: number;
}

export const useExampleProductStore = defineStore('example-products', () => {
  const products = ref<ExampleProduct[]>([
    { id: 1, name: 'Anteckningsbok', price: 49 },
    { id: 2, name: 'Penna', price: 19 },
    { id: 3, name: 'Suddi', price: 9 },
  ]);

  function addProduct(product: ExampleProduct) {
    products.value.push(product);
    console.log('example-products:addProduct', product);
  }

  return {
    products,
    addProduct,
  };
});

export const useExampleCartStore = defineStore('example-cart', () => {
  const items = ref<ExampleCartItem[]>([]);
  const productStore = useExampleProductStore();

  const detailedItems = computed(() =>
    items.value.map((item) => {
      const product = productStore.products.find((p) => p.id === item.productId);
      return {
        ...item,
        productName: product?.name ?? 'Okänd produkt',
        price: product?.price ?? 0,
        subtotal: (product?.price ?? 0) * item.quantity,
      };
    }),
  );

  const total = computed(() =>
    detailedItems.value.reduce((sum, item) => sum + item.subtotal, 0),
  );

  function addToCart(productId: number) {
    const existing = items.value.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.value.push({ productId, quantity: 1 });
    }
    console.log('example-cart:addToCart', { productId, items: items.value });
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter((item) => item.productId !== productId);
    console.log('example-cart:removeFromCart', productId);
  }

  return {
    items,
    detailedItems,
    total,
    addToCart,
    removeFromCart,
  };
});

