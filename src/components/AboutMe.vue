<script setup>

</script>

<template>

    <section>

        <b-container>
            <b-row align-h="center" class="row-am">
                <b-col class="p-3 col-am">

                    <h1>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </b-col>
                <b-col class="col-am text-center pt-3">
                    <b-img id="about_me_pic" rounded="circle" src="/sforzini01.webp"></b-img>
                </b-col>
            </b-row>
        </b-container>

    </section>

</template>

<style scoped>

    #about_me_pic {
        width: 15rem;
    }

    .col-am {
        flex: 0 0 auto;
        width: 33.33333333%;
    }

    @media only screen and (max-width: 1024px) {
        .col-am {
            width: 40%;
        }
    }

    @media only screen and (max-width: 991px) {
        .col-am {
            width: 50%;
        }
    }

    @media only screen and (max-width: 768px) {
        .col-am {
            width: 100%;
        }

        .row-am {
            flex-direction: column-reverse;
        }
    }

</style>