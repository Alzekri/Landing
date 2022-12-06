<template>
  <div class="c1 pb-2 pt-4 text-center" id="services">
    <div class="container-fluid text-center mt-1 mb- position-relative">
      <img src="../assets/log2.png " class="img-fluid" alt="" />
      <h1>We Make This</h1>
      <p class="text-uppercase text-black-50">sum of this stuff under</p>
    </div>
    <ul class="list-unstyled mt-4 mb-5 pt-5">
      <li
        :class="Filttering == 1 ? 'active rounded-pill' : 'f'"
        @click="filltetul(1), filltetwork('A')"
      >
        All
      </li>
      <li
        :class="Filttering == 2 ? 'active rounded-pill' : 'f'"
        @click="filltetul(2), filltetwork('D')"
      >
        Design
      </li>
      <li
        :class="Filttering == 3 ? 'active rounded-pill' : 'f'"
        @click="filltetul(3), filltetwork('C')"
      >
        Code
      </li>
      <li
        :class="Filttering == 4 ? 'active rounded-pill' : 'f'"
        @click="filltetul(4), filltetwork('P')"
      >
        Photography
      </li>
      <li
        :class="Filttering == 5 ? 'active rounded-pill' : 'f'"
        @click="filltetul(5), filltetwork('AP')"
      >
        Apps
      </li>
    </ul>
    <div class="">
      <div class="row">
        <div
          v-if="Filterwork == 'A' || Filterwork == 'D'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/1.jpg" alt="" />
          <h1>Work 1</h1>
        </div>
        <div
          v-if="Filterwork == 'A' || Filterwork == 'D'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/2.jpg" alt="" />
          <h1>Work 2</h1>
        </div>
        <div
          v-if="Filterwork == 'A' || Filterwork == 'C'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/3.jpg" alt="" />
          <h1>Work 3</h1>
        </div>
        <div
          v-if="Filterwork == 'A' || Filterwork == 'C'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/4.jpg" alt="" />
          <h1>Work 4</h1>
        </div>

        <div
          v-if="Filterwork == 'A' || Filterwork == 'P'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/5.jpg" alt="" />
          <h1>Work 6</h1>
        </div>

        <div
          v-if="Filterwork == 'A' || Filterwork == 'AP'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/9.jpg" alt="" />
          <h1>Work 9</h1>
        </div>

        <div
          v-if="Filterwork == 'A' || Filterwork == 'AP'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/4.jpg" alt="" />
          <h1>Work 11</h1>
        </div>
        <div
          v-if="Filterwork == 'A' || Filterwork == 'C'"
          class="col-sm-6 col-md-4 col-lg-3 work"
        >
          <img class="img-fluid" src="../assets/8.jpg" alt="" />
          <h1>Work 12</h1>
        </div>
      </div>
    </div>
    <div
      class="
        btn btn-danger
        rounded-pill
        text-warning
        m-4
        fw-bold
        text-uppercase
      "
    >
      I Want More
    </div>
  </div>
</template>
      <script>
export default {
  name: "OurWork",
  data() {
    return {
      Filttering: "1",
      Filterwork: "A",
    };
  },
  methods: {
    filltetul(f) {
      this.Filttering = f;
    },
    filltetwork(f) {
      this.Filterwork = f;
    },
  },
};
</script>
      <style scoped lang="scss">
.c1 {
  background-color: #eff7fa;
}
.container-fluid::after {
  content: "";
  height: 3px;
  width: 120px;
  background-color: #33d1cc;
  position: absolute;
  bottom: -2.2rem;
  transform: translateX(-50%);
}

ul li {
  display: inline;
  margin-left: 1rem;
}
ul li.active {
  background-color: rgb(215, 43, 43);
  color: rgb(204, 204, 16);
  padding: 0.5rem 1rem;
}
ul li:hover {
  cursor: pointer;
}
</style>
      