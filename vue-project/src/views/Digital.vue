<template>
    <Navbar/>
    <div class="flex flex-col items-center text-center pt-44">
        <digitaldef/>
    </div>
</template>

<script>
import digitaldef from '../components/digitaldef.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Digital',
    components: {
        digitaldef,
        Navbar
    }
}
</script>