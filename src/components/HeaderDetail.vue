<script lang="ts"></script>

<template>
  <div>
    <h1>Your Exercise Planning Tool</h1>
    <p>Create a custom exercise schedule!</p>
    <nav>
      <RouterLink to="/planner">Planner</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
h1,
p {
  margin: 5px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
