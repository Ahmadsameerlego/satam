<template>
    <div class="footer mt-5">
      <div class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mb-4">
              <div class="footer-colomn-me">
                <div class="flex-group-me foot-lo mb-4">
                  <img :src="require('@/assets/imgs/logo.png')" alt="" />
                </div>

                <p class="font15 main-p">
                  هذا النص هو مثال لنص يمكن أن يستبدل ببساطة نص شكلي (بمعنى أن
                  الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات الم
                </p>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-12 mb-4">
              <div class="footer-colomn-me">
                <h6>عن سيڤي</h6>
                <ul>
                  <li>
                    <router-link to="/"
                      >
                      <div class="my-l">من نحن</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/"
                      >
                      <div class="my-l">الشروط والأحكام</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/"
                      >
                      <div class="my-l">تواصل معنا</div>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/"
                      >
                      <div class="my-l">سياسة الخصوصية</div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="footer-colomn-me">
                <h6>روابط تهمك</h6>
                <ul>
                  <li>
                    <router-link to="/"
                      >
                      <div class="my-l">
                        اكتشف الوظائف
                      </div>
                    </router-link>
                  </li>
                   <li>
                    <router-link to="/"
                      >
                      <div class="my-l">
                        انضم الينا
                      </div>
                    </router-link>
                  </li>
                   <li>
                    <router-link to="/"
                      >
                      <div class="my-l">
                        طلباتي
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-4">
              <div class="footer-colomn-me">
                <h6>تابعنا على</h6>
                <ul>
                  <div class="flex-socials">
                    <a href="#"
                      ><img src="imgs/Icon feather-instagram.png" alt=""
                    /></a>
                    <a href="#"
                      ><img src="imgs/Icon feather-instagram.png" alt=""
                    /></a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="down-footer">
        <div class="container down-footer1">
          <div class="down-footer-r font14">جميع الحقوق محفوظة لموقع سيڤي</div>
          <div class="down-footer-l font14">
            <span>تصميم وبرمجه مؤسسه أوامر الشبكه</span>
            <img class="awamerLogo" :src="require('@/assets/imgs/awamrtLogo.png')" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.down-footer1{
    border-top: 1px solid #909090;
    padding-top: 15px;
}
p{
    font-weight: 600;
}
a{
    text-decoration: none !important;
    font-weight: 600;
}
.main-footer {
  padding-top: 50px;
  background-color: #EBEBEB;
  color: var(--color-white);
}
.footer-colomn-me > img {
  width: 160px;
  margin-bottom: 12px;
}
.footer-colomn-me > h6 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}
.footer-colomn-me li {
  margin-bottom: 26px;
}
.footer-colomn-me li a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-white);
}
.dot-foot {
  width: 6px;
  height: 6px;
  background-color: var(--color-white);
  margin-top: 4px;
}
.dot-foot-icon {
  color: var(--main-solid);
}
.flex-socials {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.flex-socials img {
  width: 24px;
  height: 24px;
}
.sm-img {
  width: 40px;
}
.down-footer {
  background-color: #EBEBEB;
  color: var(--color-white);
  padding: 10px 0;
}
.down-footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.down-footer-m {
  display: flex;
  align-items: center;
  gap: 25px;
}
.down-footer-m img {
  width: 45px;
}
@media (max-width: 1024px) {
  .down-footer .container {
    flex-direction: column;
  }
  .down-footer {
    padding: 8px 0;
  }
}
.foot-lo img {
  width: 120px;
}
.awamerLogo{
    width: 25px;
    height: 25px;
    margin: 0 10px;
}
</style>