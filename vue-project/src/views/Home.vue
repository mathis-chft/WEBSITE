<template>
    <Navbar/>
    <div class="flex flex-col items-center pt-44">
        <AboutMe/>
    </div>
    <div class="flex flex-col items-center gap-10 mb-16">
    <h2 class="mb-4 text-3xl text-white">002. MY PROJECTS</h2>
        <Projects/>
    </div>
</template>

<script>
import Projects from '../components/Projects.vue';
import Navbar from '../components/Navbar.vue';
import AboutMe from '../components/AboutMe.vue';

export default {
    name: 'Home',
    components: {
        Projects,
        Navbar,
        AboutMe
    }
}
</script>