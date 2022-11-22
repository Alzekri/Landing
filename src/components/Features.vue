<template>
  <div class="container text-center mt-5 mb-5 position-relative">
    <img src="../assets/log2.png " class="img-fluid" alt="" />
    <h1>We are good at</h1>
    <p class="text-uppercase text-black-50">sum of this work under</p>
  </div>
  <div class="row text-center rf">
    <div class="col-sm-12 col-md-6 col-lg-4 featuers">
      <div class="position-relative divicon">
        <FIcons class="icon1 position-absolute bottom-0" :icon="['fas', '1']" />
        <FIcons
          class="icon2 fa-4x position-absolute bottom-0"
          :icon="['fas', 'pencil']"
        />
      </div>
      <h3 class="text-warning text-uppercase">Graphic Design</h3>
      <pre class="text-center text-black-50">
          campuses nationwide providing education
         to more than17,000 students. INTI's world
          class campuses .
      </pre>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4 featuers">
      <div class="position-relative divicon">
        <FIcons class="icon1 position-absolute bottom-0" :icon="['fas', '2']" />
        <FIcons
          class="icon2 fa-4x position-absolute bottom-0"
          :icon="['fas', 'laptop']"
        />
      </div>
      <h3 class="text-warning text-uppercase">Graphic Design</h3>
      <pre class="text-center text-black-50">
        Spanning 4 campuses nationwide providing education
         to more than17,000 students. INTI's world
          class campuses .
      </pre>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4 featuers">
      <div class="position-relative divicon">
        <FIcons
          class="icon1 position-absolute bottom-0 icon3"
          :icon="['fas', '3']"
        />
        <FIcons
          class="icon2 fa-4x position-absolute bottom-0"
          :icon="['fas', 'plug']"
        />
      </div>
      <h3 class="text-warning text-uppercase">Graphic Design</h3>
      <pre class="text-center text-black-50">
        Spanning 4 campuses nationwide providing education
         to more than17,000 students. INTI's world
          class campuses .
      </pre>
    </div>
  </div>
</template>
    <script>
export default {
  name: "FeaturesView",
};
</script>
    <style scoped lang="scss">
.container::after {
  content: "";
  height: 3px;
  width: 120px;
  background-color: #33d1cc;
  position: absolute;
  bottom: -2.2rem;
  transform: translateX(-50%);
}
.icon1 {
  color: #eff7fa;
  font-size: 12rem;
  margin-left: -1rem;
}
.icon2 {
  color: aqua;
}
.featuers {
  margin-top: 20%;
  margin-bottom: 18%;
}
.rf {
  margin-top: 12rem;
}
.icon3 {
  margin-left: -3.3rem;
}
</style>
    