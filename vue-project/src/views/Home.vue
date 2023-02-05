<template>
    <Navbar/>
    <div class="flex flex-col items-center pt-44">
        <AboutMe/>
    </div>
    
    <div class="flex flex-col items-center gap-10">
        <h2 class="mb-4 text-3xl text-white">002. MY PROJECTS</h2>
        <Projects/>
    </div>
    
    <div class="flex flex-col items-center pt-20">
        <Contact/>
    </div>
</template>

<script>
import Projects from '../components/Projects.vue';
import Navbar from '../components/Navbar.vue';
import AboutMe from '../components/AboutMe.vue';
import Contact from '../components/Contact.vue'

export default {
    name: 'Home',
    components: {
        Projects,
        Navbar,
        Contact,
        AboutMe
    }
}
</script>