<script lang="ts" setup>
import { RouterView } from "vue-router";
import HeaderDetail from "./components/HeaderDetail.vue";
</script>

<template>
  <header>
    <img alt="Lotus logo" class="logo" height="200" src="@/assets/lotus-flower-purple.svg" width="200" />

    <div class="title-nav-wrapper">
      <div class="wrapper">
        <HeaderDetail></HeaderDetail>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/planner">Planner</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media (min-width: 524px) {
  header {
    display: flex;
    padding-right: 0;
    place-items: center;
    text-align: center;
  }
  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
    width: 100%;
  }
  .title-nav-wrapper {
    display: flex;
    flex-direction: column;
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 0rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
