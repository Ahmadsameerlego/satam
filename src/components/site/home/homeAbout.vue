<template>
  <section id="about" class="mt-5">
    <div class="container">
        <h5 class="site_title fw-bold text-center"> عن سيڤي برودكاست </h5>
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="single_about flex_column">
                    <img :src="require('@/assets/imgs/tree_blue.png')" class="about_img" alt="svg">
                    <p>مجالات العمل</p>
                    <span>هناك أكثر من 60 فئة في مجال العمل.</span>
                </div>
            </div>

            <div class="col-md-4">
                <div class="single_about flex_column">
                    <img :src="require('@/assets/imgs/tree_blue.png')" class="about_img" alt="svg">
                    <p>مجالات العمل</p>
                    <span>هناك أكثر من 60 فئة في مجال العمل.</span>
                </div>
            </div>

            <div class="col-md-4">
                <div class="single_about flex_column">
                    <img :src="require('@/assets/imgs/tree_blue.png')" class="about_img" alt="svg">
                    <p>مجالات العمل</p>
                    <span>هناك أكثر من 60 فئة في مجال العمل.</span>
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
    .single_about{
        position: relative;
        transition: .3s all;
        border: 1px solid #293255;
        border-radius: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        &::before{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            top: 50%;
            right: 50%;
            background-color: #293255;
            transition: .3s;
            border-radius: 10px;
            z-index: -1;
        }
        p,span, img{ transition: .3s;}
        &:hover{
            &::before{
                width: 100%;
                height: 100%;
                top: 0;
                right: 0;
            }
            p,span{
                color: #fff;
            }
            img{
                filter: brightness(0) invert(1);
            }
        }
        .about_img{
            width: 100px;
            height: 80px;
            object-fit: contain;
            margin-bottom: 15px;
        }
        p{
            color: #343333;
            font-weight: 700;
            font-size: 17px;
            margin-bottom: 6px;
        }
        span{
            color: #86888A;
        }
    }
</style>