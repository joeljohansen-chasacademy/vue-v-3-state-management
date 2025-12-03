import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Post {
  id: number;
  title: string;
}

export const useAsyncExampleStore = defineStore('example-async-actions', () => {
  const posts = ref<Post[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  async function fetchPosts() {
    console.log('fetchPosts -> start');
    isLoading.value = true;
    error.value = null;
    try {
      const data = await mockFetch();
      posts.value = data;
      console.log('fetchPosts -> success', data);
    } catch (err) {
      error.value = (err as Error).message;
      console.error('fetchPosts -> error', err);
    } finally {
      isLoading.value = false;
    }
  }

  function reset() {
    posts.value = [];
    error.value = null;
    console.log('reset -> allt nollställs');
  }

  function mockFetch(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 1 av 5 misslyckas för att visa error-state
        if (Math.random() < 0.2) {
          reject(new Error('Oj! Något gick fel vid hämtning.'));
          return;
        }
        resolve(
          Array.from({ length: 3 }).map((_, idx) => ({
            id: idx + 1,
            title: `Inlägg #${idx + 1}`,
          })),
        );
      }, 800);
    });
  }

  return {
    posts,
    isLoading,
    error,
    fetchPosts,
    reset,
  };
});

