<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderData from "./components/HeaderData.vue";
</script>

<template>
  <header>
    <img
      alt="Lotus logo"
      class="logo"
      src="@/assets/lotus-flower-purple.svg"
      width="300"
      height="300"
    />

    <div class="wrapper">
      <HeaderData></HeaderData>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/plan">Planning</RouterLink>
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
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    text-align: left;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
