import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as { message: string }[],
  }),
  actions: {
    addNotification(notification: { message: string }) {
      this.notifications.push(notification);
      setTimeout(() => {
        this.notifications.shift();
      }, 5000); 
    },
  },
});

