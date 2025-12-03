import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Retro Hoodie',
    price: 599,
    description: 'Mysig hoodie för kalla kodkvällar.',
    image: 'https://placehold.co/200x120?text=Hoodie',
  },
  {
    id: 2,
    name: 'Vue Mug',
    price: 149,
    description: 'Kaffe smakar bättre ur ett Vue-märke.',
    image: 'https://placehold.co/200x120?text=Mugg',
  },
  {
    id: 3,
    name: 'Sticker Pack',
    price: 79,
    description: 'Dekorera laptopen med dev-stickers.',
    image: 'https://placehold.co/200x120?text=Stickers',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 1299,
    description: 'Taktil feedback för snabb kodning.',
    image: 'https://placehold.co/200x120?text=Tangentbord',
  },
  {
    id: 5,
    name: 'Dark Theme Lamp',
    price: 399,
    description: 'Perfekt ljus för sena sessions.',
    image: 'https://placehold.co/200x120?text=Lampa',
  },
];

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  async function fetchProducts() {
    console.log('products:fetch -> start');
    isLoading.value = true;
    error.value = null;
    try {
      const data = await mockApi();
      products.value = data;
      console.log('products:fetch -> success', data.length);
    } catch (err) {
      error.value = (err as Error).message;
      console.error('products:fetch -> error', err);
    } finally {
      isLoading.value = false;
    }
  }

  function mockApi(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error('Produkter kunde inte hämtas.'));
          return;
        }
        resolve(MOCK_PRODUCTS);
      }, 900);
    });
  }

  return {
    products,
    isLoading,
    error,
    fetchProducts,
  };
});

