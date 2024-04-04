<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
    import AboutMe from "./components/AboutMe.vue";
    import Banner from "./components/Banner.vue";
    import Testimonial from "./components/Testimonial.vue";
    import Skills from "./components/Skills.vue";
</script>

<template>
    <header>
        <NavHeader></NavHeader>
        <Banner></Banner>
    </header>
    <AboutMe id="about"></AboutMe>
    <hr>
    <Skills id="skills"></Skills>
    <Testimonial id="testimonial"></Testimonial>
    <Footer></Footer>
</template>