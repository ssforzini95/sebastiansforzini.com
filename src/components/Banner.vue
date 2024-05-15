<script setup>

    import { ref } from 'vue';
    import AppButton from './general/AppButton.vue';

    const text = {
        title: "I'm SEBASTIAN SFORZINI",
        prg1: "Welcome to my website!! I'm a full stack developer with more than 8 years of experience.",
        prg2: "Everything you see was coded by me using Vue JS and Tailwind.",
        prg3: "Feel free to contact me by email or by any social media!"
    };

    const title = ref('');
    const prg1 = ref({text: '', state: false});
    const prg2 = ref({text: '', state: false});
    const prg3 = ref({text: '', state: false});

    let contactMeButton = ref(false);

    const typeEffectPrg3 = () => {
        if (prg3.value.text.length < text.prg3.length) {
            prg3.value.text += text.prg3.charAt(prg3.value.text.length);
            setTimeout(typeEffectPrg3, 25);
        } else {
            contactMeButton.value = true;
        }
    }

    const typeEffectPrg2 = () => {
        if (prg2.value.text.length < text.prg2.length) {
            prg2.value.text += text.prg2.charAt(prg2.value.text.length);
            setTimeout(typeEffectPrg2, 25);
        }
        if(prg2.value.text.length === text.prg2.length && !prg3.value.state) {
            setTimeout(typeEffectPrg3, 400)
            prg3.value.state = true
        }
    }

    const typeEffectPrg1 = () => {
        if (prg1.value.text.length < text.prg1.length) {
            prg1.value.text += text.prg1.charAt(prg1.value.text.length);
            setTimeout(typeEffectPrg1, 25);
        }
        if(prg1.value.text.length === text.prg1.length && !prg2.value.state) {
            setTimeout(typeEffectPrg2, 400)
            prg2.value.state = true
        }
    }

    const typeEffectTitle = () => {
        if (title.value.length < text.title.length) {
            title.value += text.title.charAt(title.value.length);
            setTimeout(typeEffectTitle, 70)
        }
        if(title.value.length === text.title.length && !prg1.value.state) {
            setTimeout(typeEffectPrg1, 400)
            prg1.value.state = true
        }
    }
    typeEffectTitle()

</script>

<template>

    <section class="p-0">

        <div class="m-0 relative w-full">
            <img class="p-0 w-full h-auto md:h-[38rem] opacity-90" src="/coding03.gif"/>
            <div class="md:absolute z-[1] md:max-w-[40%] top-[10%] left-[2%] bg-[#2C4A52] p-[1.5rem] text-[#F4EBDB] rounded shadow-2xl opacity-90 flex flex-col gap-3">
                <p class="text-4xl w-fit h-fit border-r-2 border-r-transparent border-solid font-mono">{{ title }}</p>
                <p class="w-fit h-fit border-r-2 border-r-transparent border-solid font-mono">{{ prg1.text }}</p>
                <p class="w-fit h-fit border-r-2 border-r-transparent border-solid font-mono">{{ prg2.text }}</p>
                <p class="w-fit h-fit border-r-2 border-r-transparent border-solid font-mono">{{ prg3.text }}</p>
                <AppButton :class="[(contactMeButton) ? 'opacity-100' : 'opacity-0', 'transition-opacity ease-in-out delay-150 duration-300']" link="#contact">Contact Me</AppButton>
            </div>
        </div>

    </section>

</template>