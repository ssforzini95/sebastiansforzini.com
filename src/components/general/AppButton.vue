<script setup>

const props = defineProps({
    link: String
})

</script>
<template>
    <a :href="(link) ? link : '#'" class="p-2 bg-[#F4EBDB] w-fit rounded text-gray-900 hover:bg-gray-900 hover:text-[#F4EBDB]">
        <slot></slot>
    </a>
</template>