<script>

import { doc, getDoc } from "firebase/firestore"

export default {
    data() {
        return {
            max: 100,
            variants: [
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
                "info",
                "dark"
            ],
            skills: []
        }
    },
}
</script>

<template>

    <section class="p-5">



        <b-container>
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <b-card no-body>
                <b-tabs pills card vertical nav-wrapper-class="w-25">
                    <b-tab v-for="(skill, index) in skills" :active="(index === 0)" :title="skill.name">
                        <b-card-text>
                            <b-row v-for="item in skill.items">
                                <b-col cols="2">
                                    <h3>{{ item.name }}</h3>
                                </b-col>
                                <b-col>
                                    <b-progress :max="max" animated show-progress>
                                        <b-progress-bar
                                            :value="item.value"
                                            :variant="variants[Math.floor(Math.random() * variants.length)]"
                                            :label="`${((item.value / max) * 100).toFixed(2)}%`"
                                        ></b-progress-bar>
                                    </b-progress>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-container>

    </section>

</template>

<style scoped>

    .progress-bar {
        font-weight: bold;
    }

</style>