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
// TODO: Importera useSettingsStore

// TODO: Skapa store instans och använd storeToRefs

// TODO: Funktion för att applicera theme
// const applyTheme = () => {
//   if (theme.value === 'dark') {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
// }

// TODO: Ladda settings när komponenten mountas
// onMounted(() => { ... })

// TODO: Watch för att automatiskt spara när settings ändras
// watch([theme, language, notifications, username], () => { ... })

</script>

<template>
  <div class="settings-container">
    <h1>Inställningar</h1>
    
    <div class="settings-form">
      <!-- TODO: Username input -->
      <div class="setting-group">
        <label>Användarnamn:</label>
        <input type="text" placeholder="Ditt namn">
      </div>

      <!-- TODO: Theme dropdown -->
      <div class="setting-group">
        <label>Tema:</label>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <!-- TODO: Language dropdown -->
      <div class="setting-group">
        <label>Språk:</label>
        <select>
          <option value="sv">Svenska</option>
          <option value="en">English</option>
        </select>
      </div>

      <!-- TODO: Notifications toggle -->
      <div class="setting-group">
        <label>
          <input type="checkbox">
          Aktivera notifikationer
        </label>
      </div>

      <!-- TODO: Spara-knapp -->
      <button class="save-btn">Spara inställningar</button>
    </div>

    <!-- TODO: Visa aktuella settings (för debug) -->
    <div class="current-settings">
      <h3>Aktuella inställningar:</h3>
      <pre><!-- Visa settings här som JSON --></pre>
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