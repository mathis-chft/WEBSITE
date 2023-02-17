<template>
    <Navbar/>
    <div class="flex flex-col items-center text-center pt-44">
        <Transformationdigitaledef/>
    </div>
</template>

<script>
import Transformationdigitaledef from '../components/Transformationdigitaledef.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Transformationdigitale',
    components: {
        Transformationdigitaledef,
        Navbar
    }
}
</script>