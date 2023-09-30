<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HelloWorld from './components/HelloWorld.vue'
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
    import AboutMe from "./components/AboutMe.vue";
    import Banner from "./components/Banner.vue";
</script>

<template>
    <header>
        <NavHeader></NavHeader>
        <Banner></Banner>
    </header>
    <AboutMe id="about"></AboutMe>
    <Footer></Footer>
</template>

<style scoped>

</style>
