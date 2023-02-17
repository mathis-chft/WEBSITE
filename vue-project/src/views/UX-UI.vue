<template>
    <Navbar/>
    <div class="flex flex-col items-center text-center pt-44">
        <UXUIdef/>
    </div>
</template>

<script>
import UXUIdef from '../components/UXUIdef.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'UXUI',
    components: {
        UXUIdef,
        Navbar
    }
}
</script>