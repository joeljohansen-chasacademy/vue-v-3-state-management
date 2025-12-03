import { defineStore } from "pinia";
import { ref } from "vue";

interface TodoItem {
	id: number;
	text: string;
	done: boolean;
}

// Visar hur man kan blanda ref() i samma store
export const useBasicStateStore = defineStore("example-basic-state", () => {
	const clickCount = ref(0);
	const todo = ref<TodoItem>({
		id: 1,
		text: "Lära mig Pinia",
		done: false,
	});

	function increment() {
		clickCount.value += 1;
		console.log("increment ->", clickCount.value);
	}

	function toggleTodo() {
		todo.value.done = !todo.value.done;
		console.log("toggleTodo ->", { ...todo.value });
	}

	function updateText(newText: string) {
		todo.value.text = newText;
		console.log("updateText ->", todo.value.text);
	}

	return {
		clickCount,
		todo,
		increment,
		toggleTodo,
		updateText,
	};
});
