<template>
  <NavBar />
  <LeadingView />
  <FeaturesView />
  <OurWork />
  <StaffView />
  <MeetTeam />
  <ImagesLogo />
  <StartProject />
  <ReadBlog />
  <FooterView />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import LeadingView from "../components/Leading.vue";
import FeaturesView from "../components/Features.vue";
import OurWork from "../components/OurWork.vue";
import StaffView from "../components/Stuff.vue";
import MeetTeam from "../components/MeetTeam.vue";
import ImagesLogo from "../components/ImagesLogo.vue";
import StartProject from "../components/StartProject.vue";
import ReadBlog from "../components/ReadBlog.vue";
import FooterView from "../components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    LeadingView,
    FeaturesView,
    OurWork,
    StaffView,
    MeetTeam,
    ImagesLogo,
    StartProject,
    ReadBlog,
    FooterView,
  },
};
//<FIcons :icon="['fas', 'user']" class="pt-5 ps-5" />
</script>
