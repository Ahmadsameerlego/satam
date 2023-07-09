<template>
  <!-- header  -->
  <siteHeaderVue />
  <!-- intro  -->
  <homeIntroVue />
  <!-- about  -->
  <homeAboutVue />
  <!-- vision -->
  <homeVisionVue />
  <!-- download app   -->
  <downloadAppVue />
  <!-- partners  -->
  <homePartenersVue />

  <!-- footer  -->
  <siteFooterVue />

</template>

<script>
import siteHeaderVue from '@/components/site/layout/siteHeader.vue';
import homeIntroVue from '@/components/site/home/homeIntro.vue';
import homeAboutVue from '@/components/site/home/homeAbout.vue';
import homeVisionVue from '@/components/site/home/homeVision.vue';
import downloadAppVue from '@/components/site/home/downloadApp.vue';
import homePartenersVue from '@/components/site/home/homeParteners.vue';
import siteFooterVue from '@/components/site/layout/siteFooter.vue';
export default {

  name: 'HomeView',
  components: {
    siteHeaderVue,
    homeIntroVue,
    homeAboutVue,
    homeVisionVue,
    downloadAppVue,
    homePartenersVue,
    siteFooterVue
  }
}
</script>
