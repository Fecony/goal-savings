<template>
  <div class="github">
    <div class="github__container">
      <div class="info">
        <InfoIcon />
      </div>
      <div class="github__logo">
        <a href="https://github.com/Fecony/goal-savings" target="_blank">
          <!-- <img src="../assets/svg/github.svg" alt="Github link" /> -->
          <GithubLogo />
        </a>
      </div>
      <div class="text">Github</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GithubLogo from "../assets/svg/github.svg";
import InfoIcon from "../assets/svg/info.svg";

export default Vue.extend({
  name: "GithubSidebar",
  components: {
    GithubLogo,
    InfoIcon
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/components/GithubSidebar.scss";
</style>
