<template>
  <div class="github">
    <div class="github__container">
      <div class="info">
        <img src="../assets/svg/info.svg" alt="Info link" />
      </div>
      <div class="github__logo">
        <a href="https://github.com/Fecony/goal-savings" target="_blank">
          <img src="../assets/svg/github.svg" alt="Github link" />
        </a>
      </div>
      <div class="text">Github</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GithubSidebar"
});
</script>

<style lang="scss" scoped>
.github {
  display: inline-block;
  width: 125px;
  height: 100%;
  background: #ffe066;
  position: relative;
  overflow: hidden;

  &__container {
    padding: 25px;
    flex-direction: column;
    height: inherit;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-top: 35px;
  }

  &:hover .text {
    opacity: 35%;
  }
}

.info,
.github__logo {
  display: block;
  cursor: pointer;
}

.github__logo {
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 85%;
  }
}

.text {
  color: #ffffff;
  opacity: 15%;
  font-size: 170px;
  position: absolute;
  top: 240px;
  transform: rotate(-90deg);
  cursor: default;
  font-weight: bold;
  user-select: none;
  transition: opacity 300ms ease-in-out;
}
</style>
