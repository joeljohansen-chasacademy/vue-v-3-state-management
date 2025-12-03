import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Message {
  id: number;
  text: string;
  read: boolean;
}

export const useActionsExampleStore = defineStore('example-actions', () => {
  const messages = ref<Message[]>([
    { id: 1, text: 'Välkommen!', read: false },
    { id: 2, text: 'Glöm inte att öva på Pinia', read: false },
  ]);

  const unreadCount = ref(messages.value.filter((m) => !m.read).length);

  function markAsRead(id: number) {
    const msg = messages.value.find((m) => m.id === id);
    if (!msg) return;
    msg.read = true;
    recalcUnread();
    console.log('markAsRead ->', id);
  }

  function addMessage(text: string) {
    const newMessage: Message = {
      id: Date.now(),
      text,
      read: false,
    };
    messages.value.unshift(newMessage);
    recalcUnread();
    console.log('addMessage ->', newMessage);
  }

  function clear() {
    messages.value = [];
    unreadCount.value = 0;
    console.log('clear -> tömde listan');
  }

  function recalcUnread() {
    unreadCount.value = messages.value.filter((m) => !m.read).length;
  }

  return {
    messages,
    unreadCount,
    markAsRead,
    addMessage,
    clear,
  };
});

