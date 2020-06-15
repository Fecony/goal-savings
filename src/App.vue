<template>
  <div id="app">
    <GithubSidebar />
    <router-view />
  </div>
</template>

<script>
import GithubSidebar from "@/components/GithubSidebar.vue";

export default {
  components: { GithubSidebar }
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

#app {
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}
</style>
