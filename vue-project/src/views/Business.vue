<template>
    <Navbar/>
    <div class="flex flex-col items-center text-center pt-44">
        <businessdef/>
    </div>
</template>

<script>
import businessdef from '../components/businessdef.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Business',
    components: {
        businessdef,
        Navbar
    }
}
</script>