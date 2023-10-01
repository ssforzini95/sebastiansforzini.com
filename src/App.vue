<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
    import AboutMe from "./components/AboutMe.vue";
    import Banner from "./components/Banner.vue";
    import Testimonial from "./components/Testimonial.vue";
</script>

<template>
    <header>
        <NavHeader></NavHeader>
        <Banner></Banner>
    </header>
    <AboutMe id="about"></AboutMe>
    <Testimonial></Testimonial>
    <Footer></Footer>
</template>

<style scoped>

</style>
