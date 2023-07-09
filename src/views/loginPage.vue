<template>
    <!-- header  -->
    <siteHeaderVue />

    <!-- login  -->
    <loginVue />
    
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import loginVue from '@/components/site/auth/loginComponent.vue'
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        loginVue
    }
}
</script>

<style>

</style>