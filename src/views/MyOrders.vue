<template>
    <!-- header  -->
    <siteHeaderVue />
    <!-- orders  -->
    <profileOrdersVue />
    <!-- footer  -->
    <siteFooterVue />
</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
import profileOrdersVue from '@/components/site/orders/profileOrders.vue';
export default {
    components:{
        siteHeaderVue,
        siteFooterVue,
        profileOrdersVue
    }
}
</script>

<style>

</style>