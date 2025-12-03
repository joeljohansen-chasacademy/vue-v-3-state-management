import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

// Visar hur man kan blanda ref() och reactive() i samma store
export const useBasicStateStore = defineStore('example-basic-state', () => {
  const clickCount = ref(0);
  const todo = reactive<TodoItem>({
    id: 1,
    text: 'Lära mig Pinia',
    done: false,
  });

  function increment() {
    clickCount.value += 1;
    console.log('increment ->', clickCount.value);
  }

  function toggleTodo() {
    todo.done = !todo.done;
    console.log('toggleTodo ->', { ...todo });
  }

  function updateText(newText: string) {
    todo.text = newText;
    console.log('updateText ->', todo.text);
  }

  return {
    clickCount,
    todo,
    increment,
    toggleTodo,
    updateText,
  };
});

