<template>
    <div v-if="visible"
        class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        <p>{{ notification.message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
    notification: {
        type: Object,
        required: true,
    },
});

const visible = ref(true);

onMounted(() => {
    setTimeout(() => {
        visible.value = false;
    }, 5000); 
});
</script>

