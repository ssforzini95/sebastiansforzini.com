<script setup>

import { doc, getDoc } from "firebase/firestore"
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import AppProgressBar from "./general/AppProgressBar.vue";

const max = 100;
const variants = ["danger", "warning", "success", "info", "custom", "secondary", "fuchsia", "yellow"];
const skills = [
    {
        "name": "Backend",
        "items": [
            { "name": "PHP", "value": 90 },
            { "name": "Java", "value": 70 },
        ]
    },
    {
        "name": "Frontend",
        "items": [
            { "name": "Javascript", "value": 90 },
            { "name": "Vue", "value": 80 },
        ]
    }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

</script>

<template>

    <section class="py-12 px-10 md:px-56">

        <b-container>
            <h2>Skills</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="p-8 bg-gray-100 border-gray-200 border-solid border-2 rounded-xl shadow-2xl my-5">
                <TabGroup>
                    <template class="flex">
                        <TabList class="flex flex-col rounded-l-xl space-x-1 bg-[#2C4A52] p-5">
                            <Tab v-for="skill in skills" as="template" v-slot="{ selected }">
                                <button :class="[
                                    'w-40 rounded-lg p-2.5 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-800 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 focus:outline-none'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white focus:outline-none',
                                    ]">
                                    {{ skill.name }}
                                </button>
                            </Tab>
                        </TabList>

                        <TabPanels class="p-3 border-[#2C4A52] border-solid rounded-r-xl border-2 w-full ">
                            <TabPanel v-for="skill in skills" :class="[
                                'rounded-xl bg-white p-3',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            ]">
                                <template v-for="item in skill.items">
                                    <div class="flex gap-4 mb-2">
                                        <h5 class="w-[15%] font-bold">{{ item.name }}</h5>
                                        <AppProgressBar :type="variants[Math.floor(Math.random() * variants.length)]" :value="item.value" class="w-full"></AppProgressBar>
                                    </div>
                                </template>
                            </TabPanel>
                            
                        </TabPanels>
                    </template>
                </TabGroup>
            </div>
        </b-container>

    </section>

</template>