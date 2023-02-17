<template>
    <div class="flex flex-col items-center pt-32 text-center">
        <businessdef/>
    </div>
</template>

<script>
import businessdef from '../components/businessdef.vue';

export default {
    name: 'Business',
    components: {
        businessdef
    }
}
</script>