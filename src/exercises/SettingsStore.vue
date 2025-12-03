<!--
Övning 3: Användarinställningar med localStorage

Bygg en settings-sida som sparar inställningar till localStorage.
Denna övning är lite mer avancerad och kan ta lite tid att lösa.

Uppgifter:
1. Skapa en store: stores/settings.ts
   - State:
     * theme: 'light' | 'dark' (default: 'light')
     * language: 'sv' | 'en' (default: 'sv')
     * notifications: boolean (default: true)
     * username: string (default: '')
   - Actions:
     * setTheme(theme: 'light' | 'dark')
     * setLanguage(language: 'sv' | 'en')
     * toggleNotifications()
     * setUsername(name: string)
     * loadSettings() - läser från localStorage
     * saveSettings() - sparar till localStorage
   
2. Bygg komponenten:
   - Dropdown för theme (Light/Dark)
   - Dropdown för language (Svenska/English)
   - Toggle/Checkbox för notifications
   - Input för username
   - "Spara"-knapp som anropar saveSettings()
   - Applicera faktiskt theme på sidan (lägg till/ta bort 'dark' klass på body/root)

3. Extra utmaning:
   - Använd watch() för att automatiskt spara när något ändras
   - Anropa loadSettings() när komponenten mountas (onMounted)
   - Visa en "Sparad!"-notis när inställningar sparas

Vad du kommer behöva använda:
- localStorage.getItem() och localStorage.setItem()
- JSON.stringify() och JSON.parse()
- watch() från vue för att lyssna på förändringar
- onMounted() för att ladda settings när appen startar
- document.documentElement.classList för att applicera theme

Tips:
- Spara alla settings som ett objekt: JSON.stringify({ theme, language, ... })
- I loadSettings(), kolla först om det finns något i localStorage
- För att applicera dark theme: document.documentElement.classList.add('dark')
-->

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settings'

// Skapa store instans
const store = useSettingsStore()

// Använd storeToRefs för att få reaktiva refs till state
const { theme, language, notifications, username } = storeToRefs(store)

// Funktion för att applicera theme på dokumentet
const applyTheme = () => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Ladda settings när komponenten mountas
onMounted(() => {
  store.loadSettings()
  applyTheme()
})

// Watch för att automatiskt spara och applicera theme när settings ändras
watch([theme, language, notifications, username], () => {
  store.saveSettings()
  applyTheme()
})
</script>

<template>
  <div class="settings-container">
    <h1>Inställningar</h1>
    
    <div class="settings-form">
      <!-- Username input -->
      <div class="setting-group">
        <label>Användarnamn:</label>
        <input type="text" v-model="username" placeholder="Ditt namn">
      </div>

      <!-- Theme dropdown -->
      <div class="setting-group">
        <label>Tema:</label>
        <select v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <!-- Language dropdown -->
      <div class="setting-group">
        <label>Språk:</label>
        <select v-model="language">
          <option value="sv">Svenska</option>
          <option value="en">English</option>
        </select>
      </div>

      <!-- Notifications toggle -->
      <div class="setting-group">
        <label>
          <input type="checkbox" v-model="notifications">
          Aktivera notifikationer
        </label>
      </div>

      <!-- Spara-knapp -->
      <button class="save-btn" @click="store.saveSettings()">Spara inställningar</button>
    </div>

    <!-- Visa aktuella settings (för debug) -->
    <div class="current-settings">
      <h3>Aktuella inställningar:</h3>
      <pre>{{ JSON.stringify({ theme, language, notifications, username }, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
.settings-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
}

.settings-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.setting-group {
  margin-bottom: 1.5rem;
}

.setting-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.setting-group input[type="text"],
.setting-group select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.setting-group input[type="checkbox"] {
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
}

.save-btn {
  width: 100%;
  padding: 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.save-btn:hover {
  background: #359268;
}

.current-settings {
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
}

.current-settings pre {
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

/* Dark theme styles */
:global(.dark) .settings-form {
  background: #2d2d2d;
  color: #fff;
}

:global(.dark) .setting-group input,
:global(.dark) .setting-group select {
  background: #1a1a1a;
  color: #fff;
  border-color: #444;
}

:global(.dark) .current-settings {
  background: #2d2d2d;
  color: #fff;
}

:global(.dark) .current-settings pre {
  background: #1a1a1a;
  color: #fff;
}
</style>
