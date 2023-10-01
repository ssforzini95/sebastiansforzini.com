<script setup>

    import { ref } from 'vue';

    const text = {
        title: "I'm SEBASTIAN SFORZINI",
        prg1: "Welcome to my website!! I'm a full stack developer with more than 8 years of experience.",
        prg2: "Everything you see was coded by me using Vue JS and Bootstrap.",
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
            setTimeout(typeEffectPrg3, 20);
        } else {
            contactMeButton.value = true;
        }
    }

    const typeEffectPrg2 = () => {
        if (prg2.value.text.length < text.prg2.length) {
            prg2.value.text += text.prg2.charAt(prg2.value.text.length);
            setTimeout(typeEffectPrg2, 20);
        }
        if(prg2.value.text.length === text.prg2.length && !prg3.value.state) {
            setTimeout(typeEffectPrg3, 400)
            prg3.value.state = true
        }
    }

    const typeEffectPrg1 = () => {
        if (prg1.value.text.length < text.prg1.length) {
            prg1.value.text += text.prg1.charAt(prg1.value.text.length);
            setTimeout(typeEffectPrg1, 20);
        }
        if(prg1.value.text.length === text.prg1.length && !prg2.value.state) {
            setTimeout(typeEffectPrg2, 400)
            prg2.value.state = true
        }
    }

    const typeEffectTitle = () => {
        if (title.value.length < text.title.length) {
            title.value += text.title.charAt(title.value.length);
            setTimeout(typeEffectTitle, 50)
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

        <b-row class="m-0 banner-row pos-relative">
            <div class="typingEffect rounded shadow-lg">
                <div>
                    <h2 class="typingEffect__line1">{{ title }}</h2>
                </div>
                <div>
                    <p class="typingEffect__line2">{{ prg1.text }}</p>
                </div>
                <div>
                    <p class="typingEffect__line3">{{ prg2.text }}</p>
                </div>
                <div>
                    <p class="typingEffect__line4">{{ prg3.text }}</p>
                </div>
                <b-button variant="secondary" href="#" v-if="contactMeButton">Contact Me</b-button>
            </div>
            <b-img class="p-0 banner-img" src="/coding03.gif"></b-img>
        </b-row>

    </section>

</template>

<style scoped>

    .banner-row {
        width: 100%;
    }

    .banner-img {
        width: 100%;
        height: 38rem;
        opacity: 0.9;
    }

    .pos-relative {
        position: relative;
    }

    .typingEffect {
        position: absolute;
        z-index: 1;
        max-width: 35%;
        top: 10%;
        left: 2%;
        background-color: #2C4A52;
        padding: 1.5rem;
        color: #F4EBDB;
        opacity: 0.9;
    }

    .typingEffect p, h2 {
        width: fit-content;
        height: fit-content;
        border-right: 2px solid transparent;
        font-family:monospace;
    }

    .typingEffect__line1 {
        animation: blink 1s 2;
    }

    .typingEffect__line2 {
        animation: blink 1s 2s 2;
    }

    .typingEffect__line3 {
        animation: blink 1s 4s 2;
    }

    .typingEffect__line4 {
        animation: blink 1s 8s infinite;
    }

    @keyframes blink {
        0%, 45% {
            border-color: transparent;
        }
        50%, 100% {
            border-color: white;
        }
    }

    @media only screen and (max-width: 991px) {
        .banner-img {
            height: 30rem;
        }

        .typingEffect {
            font-size: 0.7rem;
        }
    }

    @media only screen and (max-width: 690px) {
        .banner-img {
            height: 25rem;
        }

        .typingEffect {
            max-width: 45%;
        }
    }

    @media only screen and (max-width: 522px) {
        .typingEffect {
            max-width: 55%;
        }
    }

    @media only screen and (max-width: 415px) {
        .typingEffect {
            max-width: 100%;
            position: initial;
            border-radius: 0 !important;
        }

        .banner-row {
            flex-direction: column-reverse;
        }

        .banner-img {
            height: 20rem;
        }
    }

</style>