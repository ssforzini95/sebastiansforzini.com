<script setup lang="ts">
    import NavHeader from "./components/NavHeader.vue";
    import Footer from "./components/Footer.vue";
    import AboutMe from "./components/AboutMe.vue";
    import Banner from "./components/Banner.vue";
    import Testimonial from "./components/Testimonial.vue";
    import Skills from "./components/Skills.vue";
    import Career from './components/Career.vue';
    import Maintenance from './components/Maintenance.vue';

    import { AppService } from './services/app.service.js'
    import { ref } from "vue";

    const status = ref();
    const maintenance = ref();
    AppService.getMaintenanceStatus().then((mtc) => {
        maintenance.value = mtc;
        status.value = maintenance.value.status;
    }).catch(error => {
        status.value = true;
    });

</script>

<template>
    <Maintenance v-if="status === true" :maintenance="maintenance"></Maintenance>
    <template v-else-if="status === false">
        <header>
            <NavHeader></NavHeader>
            <Banner></Banner>
        </header>
        <AboutMe id="about"></AboutMe>
        <Career id="career"></Career>
        <Skills id="skills"></Skills>
        <Testimonial id="testimonial"></Testimonial>
        <Footer></Footer>
    </template>
</template>