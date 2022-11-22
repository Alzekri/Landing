<template>
  <nav class="navbar navbar-expand-lg sticky-top pt-4 pb-4 fw-bold">
    <div class="container me-5">
      <div class="text-light logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main"
        aria-controls="main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FIcons class="icon" :icon="['fas', 'bars']" />
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
              @click="cl($event)"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#this.$store.state.services"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#this.$store.state.portfolio"
              >Portfolio</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#this.$store.state.footer"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#this.$store.state.footer"
              >Contact</a
            >
          </li>
        </ul>
        <div class="search ps-3 pe-3 mb-3 d-sm-block d-lg-none">
          <FIcons class="icon" :icon="['fas', 'magnifying-glass']" />
        </div>
        <div
          class="
            btn btn-danger
            rounded-pill
            text-warning
            ms-3
            ps-3
            pe-3
            fw-bold
          "
        >
          Log In
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    cl(e) {
      console.log(e);
    },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  background-color: #19283f;
  .logo {
    color: white;
    position: fixed;
    left: 5rem;
    top: 1rem;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .navbar-toggler {
    border: 1px solid rgb(163, 221, 178);
  }
  .navbar-nav {
    .nav-link {
      color: white;
    }
  }
}
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:active,
.navbar .navbar-nav .nav-link:hover {
  color: #33d1cc;
}

.icon {
  color: #33d1cc;
}
.search {
  border-left: 1px solid rgb(163, 221, 178);
}
</style>
