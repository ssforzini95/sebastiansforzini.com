<script setup>

import { register } from 'swiper/element/bundle';

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

    <section id="testimonial" class="text-center">
        <swiper-container
            :slides-per-view="1"
            :loop="true"
            :css-mode="true"
            :autoplay="{
                delay: 5000
            }"
        >
            <swiper-slide v-for="testimonial in testimonials">
                <h2>{{ testimonial.name }}</h2>
                <b-img class="bg-white" rounded="circle" :src="testimonial.picture"></b-img>
                <p>{{ testimonial.text }}</p>
            </swiper-slide>
        </swiper-container>
    </section>

</template>

<style scoped>

    #testimonial {
        padding: 5rem 20rem;
        background-color: #8E9B97;
        color: white;
    }

    swiper-slide img {
        width: 5rem;
        float: left;
        margin-right: 1rem;
    }

    @media only screen and (max-width: 1250px) {
        #testimonial{
            padding: 5rem 10rem;
        }
    }

    @media only screen and (max-width: 690px) {
        #testimonial{
            padding: 5rem 5rem;
        }
    }

    @media only screen and (max-width: 522px) {
        swiper-slide img {
            margin-bottom: 1rem;
            float: initial;
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 415px) {
        #testimonial{
            padding: 5rem 2rem;
        }
    }

</style>