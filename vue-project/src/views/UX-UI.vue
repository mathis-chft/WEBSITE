<template>
    <Navbar/>
    <div class="flex flex-col items-center pt-32 text-center">
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