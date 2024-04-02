<template>

    <div>
        <Disclosure as="nav" class="bg-white" v-slot="{ open }">
            
            <div class="mx-auto max-w-7xl px-1 sm:px-3 lg:px-4">
                <div class="relative flex h-16 items-center justify-between ">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">

                        <!-- Mobile menu button-->
                        <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <span class="icon-[fe--bar] block h-6 w-6" v-if="!open" aria-hidden="true"></span>
                            <span class="icon-[mdi--remove] block h-6 w-6" aria-hidden="true" v-else></span>
                        </DisclosureButton>
                        <!-- Mobile menu button end-->
                    </div>

                    <!-- Main Menu -->
                    <div class="flex flex-1 items-center sm:items-stretch sm:justify-between">
                        <div class="flex flex-shrink-0 items-center">
                            <img src="/SS_Logo1.png" class="h-8 md:h-12 w-auto" id="web_logo" alt="Logo"/>
                        </div>
                        <div class="hidden sm:ml-6 sm:block self-center">
                            <div class="flex space-x-4 ">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <!-- Main Menu End -->
                </div>
            </div>

            <!-- Mobile Menu Options -->
            <DisclosurePanel class="sm:hidden bg-gray-700">
                <div class="space-y-1 px-2 pb-3 pt-2 self-center">
                    <DisclosureButton 
                        v-for="item in navigation" 
                        :key="item.name" as="a" 
                        :href="item.href" 
                        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-400 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" 
                        :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</DisclosureButton>
                </div>
            </DisclosurePanel>
            <!-- Mobile Menu Options End -->
        </Disclosure>
    </div>
</template>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const navigation = [
  { name: 'About Me', href: '#about', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Career', href: '#', current: false },
  { name: 'Testimonials', href: '#testimonial', current: false },
  { name: 'Contact', href: '#', current: false },
]
</script>