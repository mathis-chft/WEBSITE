<template>
    <Navbar/>
    <div class="flex flex-col items-center pt-52">
        <AboutMe/>
    </div>
    <div class="flex flex-col items-center gap-12">
        <Projects/>
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