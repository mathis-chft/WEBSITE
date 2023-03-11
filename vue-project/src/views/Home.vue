<template>
    <Navbar/>
    <div class="flex flex-col items-center pt-44">
        <AboutMe/>
    </div>
    <div class="flex flex-col items-center gap-10">
        <Projects/>
    </div>
    <div class="flex flex-col items-center pt-20">
        <CV/>
    </div>
    <div class="flex flex-col items-center gap-10 pt-20">
        <Contact/>
    </div>
</template>
<script>
import Projects from '../components/Projects.vue';
import Navbar from '../components/Navbar.vue';
import AboutMe from '../components/AboutMe.vue';
import Contact from '../components/Contact.vue'
import Transformationdigitaledef from '../components/Transformationdigitaledef.vue';
import UXUIdef from '../components/UXUIdef.vue';
import devdef from '../components/devdef.vue';
import businessdef from '../components/businessdef.vue';
import digitaldef from '../components/digitaldef.vue';

export default {
    name: 'Home',
    components: {
    Projects,
    Navbar,
    Contact,
    AboutMe,
    Transformationdigitaledef,
    UXUIdef,
    devdef,
    businessdef,
    digitaldef,
}
}
</script>