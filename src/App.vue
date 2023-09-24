<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import HelloWorld from './components/HelloWorld.vue'
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
</script>

<template>
    <header>
        <NavHeader></NavHeader>
    </header>

    <footer>
        <Footer></Footer>
    </footer>
</template>

<style scoped>

</style>
