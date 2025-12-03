<!--
Övning 2: Todo-lista med filter

Bygg en todo-lista med Pinia som har filtering och flera getters.

Här har ni säkerligen mycket kod redan i andra projekt som ni kan återanvända.

Uppgifter:
1. Skapa en store: stores/todo.ts
   - State: todos (array av { id: number, text: string, completed: boolean })
   - Getters:
     * completedTodos - returnerar bara completed todos
     * activeTodos - returnerar bara aktiva todos  
     * todoCount - totalt antal todos
     * completedCount - antal completed todos
   - Actions:
     * addTodo(text: string) - lägger till ny todo med id: Date.now()
     * toggleTodo(id: number) - togglar completed status
     * deleteTodo(id: number) - tar bort en todo
     * clearCompleted() - tar bort alla completed todos

2. Bygg komponenten:
   - Input-fält med knapp för att lägga till todos
   - Lista som visar todos baserat på valt filter
   - Checkbox för varje todo som togglar completed
   - Delete-knapp för varje todo
   - Filter-knappar: "Alla" (default), "Aktiva", "Completed"
   - Visa statistik: X aktiva av Y totalt

Vad du kommer behöva använda:
- ref() för todos array i store
- computed() för alla getters
- find() och filter() för att hitta/filtrera todos
- v-for för att loopa todos
- v-model för input-fält och checkboxes
- Lokal ref() i komponenten för currentFilter ('all', 'active', 'completed')

Tips:
- Använd Date.now() för att skapa unika id:n
- Skapa en computed property i komponenten som filtrerar baserat på currentFilter
- Tänk på att använda :key="todo.id" i v-for
-->

<script setup lang="ts">
import { ref, computed } from 'vue'
// TODO: Importera useTodoStore

// TODO: Skapa store instans

// TODO: Lokal state för input och filter
const newTodoText = ref('')
const currentFilter = ref<'all' | 'active' | 'completed'>('all')

// TODO: Computed property som returnerar rätt todos baserat på currentFilter
// Tips: Använd currentFilter.value för att avgöra om du ska visa
// store.todos, store.activeTodos eller store.completedTodos

// TODO: Funktion för att lägga till todo
// const handleAddTodo = () => { ... }

</script>

<template>
  <div class="todo-container">
    <h1>Min Todo-lista</h1>
    
    <!-- TODO: Input för ny todo -->
    <div class="add-todo">
      <input 
        type="text"
        placeholder="Vad behöver göras?"
      >
      <button>Lägg till</button>
    </div>

    <!-- TODO: Filter-knappar -->
    <div class="filters">
      <button>Alla</button>
      <button>Aktiva</button>
      <button>Completed</button>
    </div>

    <!-- TODO: Statistik -->
    <div class="stats">
      <p>Aktiva: </p>
      <p>Totalt: </p>
    </div>

    <!-- TODO: Todo-lista -->
    <ul class="todo-list">
      <!-- Loop här med v-for -->
      <!-- Varje todo ska ha: checkbox, text, delete-knapp -->
    </ul>

    <!-- TODO: Clear completed knapp (visa bara om det finns completed todos) -->
    
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
}

.add-todo {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.add-todo input {
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
}

.add-todo button {
  padding: 0.75rem 1.5rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filters button {
  padding: 0.5rem 1rem;
  border: 2px solid #42b983;
  background: white;
  color: #42b983;
  border-radius: 4px;
  cursor: pointer;
}

.filters button.active {
  background: #42b983;
  color: white;
}

.stats {
  margin: 1rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.todo-list li.completed {
  opacity: 0.6;
  text-decoration: line-through;
}

.todo-list input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-list span {
  flex: 1;
}

.todo-list button {
  padding: 0.25rem 0.75rem;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>