<template>

    <header>
        <b-navbar toggleable="lg" variant="light" class="mt-2">
            <b-navbar-brand href="#">
                <b-img src="/SS_Logo1.png" id="web_logo" fluid alt="Logo"></b-img>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="header-align">
                <b-navbar-nav>
                    <b-nav-item href="#about">About Me</b-nav-item>
                    <b-nav-item href="#">Skills</b-nav-item>
                    <b-nav-item href="#">Career</b-nav-item>
                    <b-nav-item href="#">Testimonials</b-nav-item>
                    <b-nav-item href="#">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<style scoped>

    .header-align {
        justify-content: right;
    }

    .header-align .nav-item {
        margin-right: 2rem;
    }

    .navbar-brand {
        margin-left: 3rem;
    }

    .navbar {
        background-color: white !important;
    }

    .navbar-brand {
        width: 15%;
    }

    @media only screen and (max-width: 1182px) {
        .navbar-brand {
            width: 20%;
        }
    }

    @media only screen and (max-width: 991px) {
        .navbar-collapse {
            padding-left: 1rem;
            margin-top: 1rem;
            background-color: #F4EBDB;
        }

        .navbar-toggler {
            margin-right: 1rem;
        }

        .navbar-brand {
            margin-left: 1rem;
            width: 30%;
        }
    }

    @media only screen and (max-width: 690px) {
        .navbar-brand {
            width: 40%;
        }

        .navbar-toggler {
            float: right;
        }
    }

</style>
<script setup>
</script>