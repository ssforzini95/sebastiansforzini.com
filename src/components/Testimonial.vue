<script setup>

import 'swiper/css';
import 'swiper/css/autoplay';

import { register } from 'swiper/element/bundle';
import { Autoplay } from 'swiper/modules';

import { AppService } from '../services/app.service.js'
import { ref } from 'vue';

register();

const testimonials = ref([]);
AppService.getTestimonials().then(response => {
    testimonials.value = response;
});

</script>

<template>

    <section v-if="testimonials.length > 0" id="testimonial" class="text-center text-white bg-[url('/background-2.jpg')] bg-auto">
        <swiper-container
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :modules="[Autoplay]"
        >
            <swiper-slide v-for="testimonial in testimonials" class="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center py-20 px-16 xl:px-60 lg:px-32">
                <img class="bg-white rounded-full lg:w-32 lg:h-32 w-40 h-40 float-left mr-4" :src="testimonial.image"/>
                <span>
                    <h1 class="mb-2">{{ testimonial.name }}</h1>
                    <p class="text-xl">{{ testimonial.description }}</p>
                </span>
            </swiper-slide>
        </swiper-container>
    </section>

</template>