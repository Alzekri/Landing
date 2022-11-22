<template>
  <div class="container-fluid text-center p-5 mt-5">
    <div class="container-fluid text-center position-relative cm">
      <img src="../assets/log2.png " alt="" />
      <h1 class="fw-bold">Read Our Blog</h1>
      <p class="text-uppercase text-black-50 mb-5">NEW STORIES</p>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card mt-5">
          <img src="../assets/blog-1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="text-black-50 text-start fw-bold">Jan 17,2022</p>
            <h5 class="text-start">Some Awesome Blog Title Here</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card mt-5">
          <img src="../assets/blog-3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="text-black-50 text-start fw-bold">Jan 17,2022</p>
            <h5 class="text-start">Some Awesome Blog Title Here</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card mt-5">
          <img src="../assets/blog-2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="text-black-50 text-start fw-bold">Jan 17,2022</p>
            <h5 class="text-start">Some Awesome Blog Title Here</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="btn btn-danger rounded-pill text-warning mt-5 fw-bold">
      MORE STORIES
    </div>
  </div>
</template>
      <script>
export default {
  name: "ReadBlog",
};
</script>
      <style scoped lang="scss">
.cm::after {
  content: "";
  height: 3px;
  width: 120px;
  background-color: #33d1cc;
  position: absolute;
  bottom: -2.2rem;
  transform: translateX(-50%);
}
</style>
      