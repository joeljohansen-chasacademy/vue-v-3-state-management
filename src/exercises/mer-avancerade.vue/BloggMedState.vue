<!--
Övning 4: Blogg med kategorier och routing

Bygg en mini-blogg som kombinerar Pinia med Vue Router.

Uppgifter:
1. Skapa två stores:
   
   stores/blog.ts:
   - State: posts (array), loading (boolean), error (string | null)
   - Post-struktur: { id, title, content, categoryId, createdAt }
   - Actions: fetchPosts() (mocka med setTimeout 1 sekund), getPostById(id)
   - Getters: postsByCategory(categoryId), latestPosts (senaste 3)

   stores/category.ts:
   - State: categories (array med { id, name, color })
   - Getter: getCategoryById(id)
   - Hårdkoda 3-4 kategorier: "Tech", "Lifestyle", "News", etc.

2. Skapa routes i router/index.ts:
   - / → HomeView (visa alla posts)
   - /category/:id → CategoryView (filtrerade posts)
   - /post/:id → PostView (en enskild post)

3. Bygg views:
   - HomeView: Lista posts, visa loading state, klicka för att gå till post
   - CategoryView: Använd route.params.id, visa posts från den kategorin
   - PostView: Använd route.params.id, hämta och visa en post

4. Bonus: Lägg till en CategoryFilter-komponent i HomeView som länkar till category-routes

Tips:
- Mocka fetchPosts så här: 
  setTimeout(() => { posts.value = [...hårdkodad data] }, 1000)
- Använd useRoute() från vue-router för att få params
- Anropa fetchPosts() i onMounted
-->

<script setup lang="ts">
// Startkod - ta bort denna komponent och skapa views istället!
</script>

<template>
  <div>
    <h1>Övning 4: Blogg</h1>
    <p>Skapa views och router enligt instruktionerna ovan.</p>
    <p>Denna komponent är bara en placeholder!</p>
  </div>
</template>