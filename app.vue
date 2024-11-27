<script setup lang="ts">
import ContactForm from './components/ContactForm.vue';
import SocialBlock from './components/SocialBlock.vue';
import InfoBlock from './components/InfoBlock.vue';

import { useNotificationStore } from '@/stores/notifications';
import Toast from '@/components/Toast.vue'; 

const notificationStore = useNotificationStore();
</script>


<template>
  <div class="main bg-background flex flex-col lg:flex-row  justify-center items-center gap-[45px] lg:gap-[75px]">
    <SocialBlock class="order-1 lg:order-2"/>
    <InfoBlock class="order-2 lg:order-1 mb-[17px] lg:mb-0"/>
    <ContactForm  class="order-3" />
    <Toast
      v-for="(notification, index) in notificationStore.notifications"
      :key="index"
      :notification="notification"
    />
  </div>
</template>
<style>
.main {
  padding: 113px 203px;
}

@media(max-width:1400px) {
  .main {
    padding: 115px 53px;
  }

  @media(max-width:425px) {
    .main {
      padding: 50px 20px;
    }
  }
}
</style>