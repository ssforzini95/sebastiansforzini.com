<script setup>

import { ref, toRefs } from 'vue';

const props = defineProps({
    type: String,
    value: Number
})

const types = {
    "danger": { background: "bg-red-200", text: "text-red-900" },
    "warning": { background: "bg-orange-200", text: "text-orange-900" },
    "info": { background: "bg-blue-200", text: "text-blue-900" },
    "success": { background: "bg-green-200", text: "text-green-900" },
    "custom": { background: "bg-indigo-200", text: "text-indigo-900" },
    "secondary": { background: "bg-gray-200", text: "text-gray-900" },
    "fuchsia": { background: "bg-fuchsia-200", text: "text-fuchsia-900" },
    "yellow": { background: "bg-yellow-200", text: "text-yellow-900" },
}

</script>
<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden p-1">
        <div class="relative h-6 flex items-center justify-center text-fuchsia-50">
            <div :class="[(type in types) ? types[type].background : types['custom'].background, 'absolute top-0 bottom-0 left-0 rounded-lg']" :style="`width: ${(value) ? value : 0}%`"></div>
            <div :class="[(type in types) ? types[type].text : types['custom'].text, 'relative font-medium text-sm']">{{ (value) ? value : 0 }}%</div>
        </div>
    </div>
</template>