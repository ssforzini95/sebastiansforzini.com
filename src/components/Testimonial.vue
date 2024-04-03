<script setup>

import 'swiper/css';
import 'swiper/css/autoplay';

import { register } from 'swiper/element/bundle';
import { Autoplay } from 'swiper/modules';

register();

//TODO: Here an API call should be placed from firebase API
const testimonials = [
    {
        name: "John Allen",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        picture: "/sforzini01.webp"
    },
    {
        name: "Agustín Vázquez",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        picture: "/icon.png"
    }
];

</script>

<template>

    <section id="testimonial" class="text-center text-white bg-[url('/background-2.jpg')] bg-auto">
        <swiper-container
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :modules="[Autoplay]"
        >
            <swiper-slide v-for="testimonial in testimonials" class="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center py-20 px-16 xl:px-60 lg:px-32">
                <img class="bg-white rounded-full lg:w-32 lg:h-32 w-40 h-40 float-left mr-4" :src="testimonial.picture"/>
                <span>
                    <h1 class="mb-2">{{ testimonial.name }}</h1>
                    <p class="text-xl">{{ testimonial.text }}</p>
                </span>
            </swiper-slide>
        </swiper-container>
    </section>

</template>