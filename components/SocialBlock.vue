<script setup lang="ts">


const icons =  [
    { name: 'Instagram', link: 'https://instagram.com', svgPath: '/icons/instagram.svg' },
    { name: 'Twitter', link: 'https://twitter.com', svgPath: '/icons/twitter.svg' },
    { name: 'Facebook', link: 'https://facebook.com', svgPath: '/icons/facebook.svg' },
    { name: 'VK', link: 'https://vk.com', svgPath: '/icons/vk.svg' },
];
const orderClasses = {
    Twitter: 'order-2 lg:order-1',
    Facebook: 'order-3 lg:order-2',
    VK: 'order-4 lg:order-3',
    Instagram: 'order-1 lg:order-4',
};
</script>

<template>
    <div class="block grid grid-cols-4 lg:grid-cols-2 lg:w-[174px] gap-[46px] mb-1 max-w-[545px]  ">
        <a v-for="icon in icons" :key="icon.name" :href="icon.link" target="_blank" rel="noopener noreferrer" :class="[
            'w-16 h-16 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 transition',
            orderClasses[icon.name]
        ]">
            <img :src="icon.svgPath" :alt="icon.name" class="w-8 h-8" />
        </a>
    </div>
</template>

<style scoped>
@media(max-width:450px) {
    .block {
        gap: 15px;
    }
}
</style>
