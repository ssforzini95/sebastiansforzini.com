<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HelloWorld from './components/HelloWorld.vue'
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
    import AboutMe from "./components/AboutMe.vue";
</script>

<template>
    <NavHeader></NavHeader>
    <AboutMe id="about"></AboutMe>
    <Footer></Footer>
</template>

<style scoped>

</style>
