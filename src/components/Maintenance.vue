<script setup>

const props = defineProps({
    maintenance: Object
})

</script>
<template>
    <section class="bg-white">
        <div class="px-4 mx-auto max-w-screen-md text-center py-28 lg:px-12 flex flex-col items-center gap-5">
            <img src="/maintenance.png" alt="Maintenance" class="w-56" />
            <h1 class="text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">{{ maintenance.title }}</h1>
            <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400" v-html="maintenance.description"></p>
        </div>
    </section>
</template>