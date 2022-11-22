<template>
  <div class="text-center mt-5">
    <div class="container-fluid text-center position-relative">
      <img src="../assets/log2.png " alt="" />
      <h1>STUFF</h1>
      <p class="text-uppercase text-black-50">sum of this stuff under</p>
    </div>

    <p class="mt-5 text-center m-auto text-black-50 p1">
      Spanning 4 campuses nationwide providing education to more than17,000
      students. INTI's world class campuses .Spanning 4 campuses nationwide
      providing education to more than17,000 students. INTI's world class
      campuses .Spanning 4 campuses nationwide providing education to more
      than17,000 students. INTI's world class campuses .
    </p>
    <div class="row text-center align-items-center">
      <div class="col-sm-12 col-md-5">
        <h4 class="mt-5">Retina Design</h4>
        <p class="text-black-50 fs-6 ps-5 pe-5">
          Spanning 4 campuses nationwide providing education to more than17,000
          students.
        </p>
        <p class="text-black-50 fs-6 ps-5 pe-5">
          INTI's world class campuses .Spanning 4 campuses nationwide providing
          education to more than17,000 students. INTI's world class campuses
        </p>
        <div class="btn btn-danger rounded-pill text-warning fw-bold">
          Order Me One
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <img class="img-fluid" src="../assets/7.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
        <script>
export default {
  name: "StuffView",
};
</script>
        <style scoped lang="scss">
.container-fluid::after {
  content: "";
  height: 3px;
  width: 120px;
  background-color: #33d1cc;
  position: absolute;
  bottom: -2.2rem;
  transform: translateX(-50%);
}
.p1 {
  max-width: 600px;
}
.row {
  margin-top: 5rem;
}
</style>
        