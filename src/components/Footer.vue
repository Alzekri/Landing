<template>
  <div
    class="footer row text-center text-light ps-5 pb-5"
    id="this.$store.state.footer"
  >
    <div class="col-sm-12 col-md-6 col-lg-4 text-start ps-5 pt-5">
      <img class="img-fluid mb-5" src="../assets/logo.png" alt="" />
      <h4 class="text-white-50 mb-5">
        Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
        lacinia eget consectetur sed, convallis at tellus.
      </h4>
      <h4 class="text-white-50 mt-5">
        Created By <span class="span1">Graphberry</span>
      </h4>
      <h4 class="text-white-50">
        ©2022 - <span class="span2">Bondi Lnc</span>
      </h4>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-2 text-start ps-5">
      <h1>Links</h1>
      <ul class="text-white-50 list-unstyled">
        <li>Home</li>
        <li>Our Services</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
        <li>Support</li>
        <li>Terms and Condition</li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-2 text-start ps-5">
      <h1 class="text-start">About Us</h1>
      <ul class="text-white-50 list-unstyled">
        <li>Sign In</li>
        <li>Register</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4 pe-5 text-start ps-5">
      <h1>Contact Us</h1>
      <h4 class="text-white-50 mb-4 lh-lg text-start">
        Get in touch with us via mail phone.We are waiting for your call or
        message
      </h4>
      <div
        class="btn btn-danger rounded-pill text-warning fw-bold w-100 p-2 mt-3"
      >
        graphberry@gmail.com
      </div>
      <ul class="list-unstyled text-start mt-5">
        <FIcons
          class="Ficons Ficons1 rounded-pill p-2"
          :icon="['fab', 'facebook']"
        />
        <FIcons class="rounded-pill p-2" :icon="['fab', 'twitter']" />
        <FIcons
          class="Ficons Ficons3 rounded-pill"
          :icon="['fab', 'linkedin']"
        />
        <FIcons
          class="Ficons Ficons4 rounded-pill p-2"
          :icon="['fab', 'youtube']"
        />
      </ul>
    </div>
  </div>
</template>
      <script>
export default {
  name: "FooterView",
};
</script>
      <style scoped lang="scss">
.footer {
  background-color: #19283f;
}
.span1 {
  color: rgb(22, 196, 138);
}
.span2 {
  color: yellow;
}

li {
  margin-top: 0.6rem;
  font-size: 1.2rem;
  font-family: bold;
}
.icons {
  color: white;
}

.Ficons {
  margin-right: 1rem;
  font-size: 2rem;
}
.Ficons1 {
  background-color: #1877f2;
}
.Ficons2 {
  background-color: #1da1f2;
}
.Ficons3 {
  background-color: #0077b5;
}
.Ficons4 {
  background-color: #ff0000;
}
</style>
      