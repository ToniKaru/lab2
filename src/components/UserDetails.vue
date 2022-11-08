<script setup lang="ts">
import { ref } from "vue";
const newUserNameText = ref("");
const message = ref("Hi ");
const savedName = ref("");

function login() {
  if (newUserNameText.value.length >= 0) {
    localStorage.setItem("userName", newUserNameText.value);
    savedName.value = localStorage.getItem("userName")!;
  } else {
    localStorage.removeItem("userName");
  }
}
</script>

<template>
  <div class="userdetails">
    <h2 v-if="savedName.length > 0">{{ message + savedName + "!" }}</h2>

    <h3>
      To give you better suggestions and personalize your experience, please
      answer a few questions.
    </h3>

    <form class="login-form" @submit.prevent="login">
      <p>
        <label for="new-user">Who are you? </label>
        <input v-model="newUserNameText" id="new-user" placeholder="Debbie" />
      </p>
      <!-- <p>
        <label for="new-user"
          >How many times a week do you want to exercise?</label
        >
        <input
          v-model="newUserExerciseText"
          id="new-user-exercise"
          placeholder="3"
        />
      </p>
      <p>
        <label for="new-user">What is your favorite color?</label>
        <input v-model="newUserColorText" id="new-user-color" placeholder="3" />
      </p> -->
      <button v-on:click="login">Submit</button>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .userdetails {
    margin-top: 10vh;
    margin-bottom: 10vh;

    display: block;
    align-items: center;
  }
}
</style>
