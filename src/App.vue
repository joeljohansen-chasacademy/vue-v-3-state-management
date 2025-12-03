<script setup lang="ts">
import { ref } from 'vue';

// Pedagogiska exempel
import Example1BasicState from '@/components/examples/Example1BasicState.vue';
import Example2Getters from '@/components/examples/Example2Getters.vue';
import Example3Actions from '@/components/examples/Example3Actions.vue';
import Example4AsyncActions from '@/components/examples/Example4AsyncActions.vue';
import Example5MultipleStores from '@/components/examples/Example5MultipleStores.vue';

// Komplett demo
import UserInfo from '@/components/UserInfo.vue';
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

type TabKey = 'examples' | 'demo';
const activeTab = ref<TabKey>('examples');

const exampleComponents = [
  Example1BasicState,
  Example2Getters,
  Example3Actions,
  Example4AsyncActions,
  Example5MultipleStores,
];
</script>

<template>
  <main class="app-shell">
    <header class="hero">
      <div>
        <p class="eyebrow">Pinia + Vue 3 + TypeScript</p>
        <h1>State Management Demo</h1>
        <p>Välj flik för att växla mellan små exempel och komplett demo.</p>
      </div>
      <nav class="tabs">
        <button
          type="button"
          :class="{ active: activeTab === 'examples' }"
          @click="activeTab = 'examples'"
        >
          Exempel 1–5
        </button>
        <button
          type="button"
          :class="{ active: activeTab === 'demo' }"
          @click="activeTab = 'demo'"
        >
          Komplett demo
        </button>
      </nav>
    </header>

    <section v-if="activeTab === 'examples'" class="examples-section">
      <p class="section-lead">
        Kodexempel som visar state, getters, actions och cross-store.
      </p>
      <div class="examples-grid">
        <component
          v-for="(Comp, index) in exampleComponents"
          :is="Comp"
          :key="index"
        />
      </div>
    </section>

    <section v-else class="demo-section">
      <p class="section-lead">
        Enkel produktkatalog + varukorg som delar state mellan flera stores.
      </p>
      <div class="demo-grid">
        <UserInfo />
        <ProductList />
        <ShoppingCart />
      </div>
    </section>
  </main>
</template>

<style scoped>
.app-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #94a3b8;
}

.tabs {
  display: inline-flex;
  border: 1px solid #cbd5f5;
  border-radius: 999px;
  overflow: hidden;
}

.tabs button {
  padding: 0.5rem 1.25rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  color: #4c1d95;
}

.tabs button.active {
  background: #ede9fe;
}

.section-lead {
  color: #475569;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
</style>
