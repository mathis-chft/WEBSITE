<template>
    <Navbar/>
    <div class="flex flex-col items-center tex44t-center pt-44">
        <devdef/>
    </div>
</template>

<script>
import devdef from '../components/devdef.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Dev',
    components: {
        devdef,
        Navbar
    }
}
</script>