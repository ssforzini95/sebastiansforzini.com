<script setup>

import { AppService } from '../services/app.service.js'
import { ref } from 'vue';

const careers = ref([]);
AppService.getCareerInformation().then(response => {
    careers.value = response;
});

</script>
<template>

    <section class="p-12 bg-gray-900 text-white" v-if="careers.length > 0">
        <h2>My Career</h2>
        <ol class="relative border-s border-gray-200 mt-5">                  
            <li class="mb-10 ms-4" v-for="career in careers">
                <span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white">
                    <img class="rounded-full" :src="career.logo" :alt="career.altLogo">
                </span>
                <h3 class="ml-4 mb-2 text-xl font-semibold text-white">{{ career.title }}</h3>
                <div class="flex mb-1 justify-between gap-2 sm:gap-0 sm:items-center flex-col sm:flex-row">
                    <time class="text-md font-normal leading-none text-gray-500">{{ career.dates }}</time>
                    <p>{{ career.location }}</p>
                </div>
                <p class="mb-4 text-base font-normal text-gray-400" v-html="career.description"></p>
            </li>
        </ol>
    </section>

</template>