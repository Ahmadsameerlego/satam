<template>
  <section id="homeIntro" class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-7 mb-3">
                <div class="row">

                    <div class="col-md-6">
                        <h6 class="fw-bold mb-3">ابحث عن وظيفتك فى سيڤي برودكاست</h6>
                        <p class="fw-6">سي ڤي برودكاست عبارة عن منصة تتيح لك عرض مؤهلاتك وخبراتك ومهاراتك للجهات الباحثة عن مرشحين للعمل لديها.</p>
                    </div>

                    <div class="col-md-6">
                        <h6 class="fw-bold mb-3">لماذا سي في برودكاست</h6>
                        <p class="fw-6"> يتيح سيڤي برودكاست الفرصة للباحثين عن وظائف، ميزة خاصة من خلال تسجيل مقطع فيديو يُبرز اهم النقاط في سيرتك الذاتية. </p>
                    </div>

                    <div class="col-md-12">
                        <h6 class="fw-bold mb-3">نفتح لك ابواب عالم الوظائف</h6>
                        <p class="fw-6"> يتيح لك سي ڤي برودكاست الوظائف المعلنة عبر التطبيق والتي تناسب مؤهلاتك وخبراتك ومهاراتك، وكذلك آلية للتواصل معك من قبل الجهات الباحثة عن موظفين.  </p>
                    </div>

                    <div class="intro_btns mt-4 d-flex align-items-center">
                        <router-link to="/" class="main_btn d-flex"> 
                            <img :src="require('@/assets/imgs/search.png')" alt="">
                            <span>البحث عن وظيفة</span>
                        </router-link>
                        <router-link to="/" class="bordered_btn"> اكتشف الوظائف </router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-5 mb-3">
                <div class="job_image">
                    <img class="w-100 h-100" :src="require('@/assets/imgs/job.png')" alt="job canvas">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #homeIntro{
        p{
            font-size: 15px;
        }
        .intro_btns{
            a{
                border-radius: 20px;
                padding-top: 9px;
                padding-bottom: 9px;
                margin: 0 12px;
                font-size: 14px;
                font-weight: 600;
                img{
                    width: 16px;
                    height: 16px;
                    margin: 0 6px;
                }
            }
        }
        
    }

    .job_image{
            position: relative;
            height: 320px;
            img{
                object-fit: contain;
                animation: MoveUpDown 5s linear infinite;
                position: absolute;
                top: 0;
                left: 0;
            }
        }

    @keyframes MoveUpDown {
        0%,
        100% {
            top: 0;
        }
        50% {
            top: -50px;
        }
    }
</style>