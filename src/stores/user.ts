import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface UserProfile {
  name: string;
  email: string;
}

export const useUserStore = defineStore('user', () => {
  const profile = ref<UserProfile | null>(null);
  const isLoggedIn = computed(() => Boolean(profile.value));

  function login(name: string, email: string) {
    profile.value = { name, email };
    console.log('user:login', profile.value);
  }

  function logout() {
    profile.value = null;
    console.log('user:logout');
  }

  function updateEmail(newEmail: string) {
    if (!profile.value) return;
    profile.value.email = newEmail;
    console.log('user:updateEmail', newEmail);
  }

  return {
    profile,
    isLoggedIn,
    login,
    logout,
    updateEmail,
  };
});

