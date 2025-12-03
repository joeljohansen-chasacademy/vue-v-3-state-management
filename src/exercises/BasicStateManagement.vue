<!--
Övning 1: Enkel räknare 

Skapa en enkel räknare med Pinia för att lära dig grunderna i state management.

Uppgifter:
1. Skapa en store: stores/counter.ts
   - State: count (number, startvärde 0)
   - Getters: doubleCount (count * 2), isEven (true/false om count är jämnt)
   - Actions: increment(), decrement(), reset(), incrementBy(amount)

2. Bygg komponenten nedan:
   - Visa count och doubleCount
   - Visa om numret är jämnt eller udda
   - Knappar för: +1, -1, +5, Reset
   - Använd storeToRefs för att destructure state/getters

Vad du kommer behöva använda:
- defineStore från 'pinia'
- ref() och computed() för state och getters
- storeToRefs för att behålla reaktivitet vid destructuring
- Composition API med <script setup>

Tips:
- Börja med att skapa store-filen först (se 1-basic-state.ts för inspiration :))
- Importera sedan storen i denna komponent
-->

<script setup lang="ts">
// TODO: Importera useCounterStore från '@/stores/counter'
// TODO: Importera storeToRefs från 'pinia'

// TODO: Skapa en instans av counter store

// TODO: Använd storeToRefs för att destructure count, doubleCount, isEven

// TODO: Destructure actions (increment, decrement, etc.) direkt från store
</script>

<template>
  <div class="counter-container">
    <h1>Räknare med Pinia</h1>
    
    <!-- TODO: Visa count -->
    <div class="display">
      <p class="count">Count: </p>
      <p class="double">Double: </p>
      <p class="status">Numret är: </p>
    </div>

    <!-- TODO: Lägg till knappar för increment, decrement, incrementBy(5), reset -->
    <div class="buttons">
      
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid #42b983;
  border-radius: 8px;
}

.display {
  margin: 2rem 0;
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 4px;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #42b983;
}

.double, .status {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #359268;
}

button:active {
  transform: scale(0.95);
}
</style>