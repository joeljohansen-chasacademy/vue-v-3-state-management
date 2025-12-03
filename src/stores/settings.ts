import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  // State
  const theme = ref<'light' | 'dark'>('light')
  const language = ref<'sv' | 'en'>('sv')
  const notifications = ref(true)
  const username = ref('')

  // Actions
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
  }

  function setLanguage(newLanguage: 'sv' | 'en') {
    language.value = newLanguage
  }

  function toggleNotifications() {
    notifications.value = !notifications.value
  }

  function setUsername(name: string) {
    username.value = name
  }

  function loadSettings() {
    const saved = localStorage.getItem('settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      theme.value = parsed.theme ?? 'light'
      language.value = parsed.language ?? 'sv'
      notifications.value = parsed.notifications ?? true
      username.value = parsed.username ?? ''
    }
  }

  function saveSettings() {
    const settings = {
      theme: theme.value,
      language: language.value,
      notifications: notifications.value,
      username: username.value
    }
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  return {
    theme,
    language,
    notifications,
    username,
    setTheme,
    setLanguage,
    toggleNotifications,
    setUsername,
    loadSettings,
    saveSettings
  }
})

