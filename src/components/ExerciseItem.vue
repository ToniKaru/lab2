<template>
  <body>
    <div class="day-of-week">
      <h2>{{ day }}</h2>
      <div class="exercise-item-list" v-for="(exercise, index) in exercises" v-bind:key="index">
        <div v-if="exercises[index].exerciseName !== ''">
          <a> {{ exercise.exerciseName }}</a>
          <a>{{ exercise.duration }}min</a>
          <button class="removeButton" @click="removeExercise(exercise.id)">Remove</button>
        </div>
      </div>
      <div id="add-exercise">
        <form @submit.prevent="addNewExercise">
          <input id="new-exercise" v-model="newExerciseName" placeholder="e.g. Jumping Jacks" required />
          <input id="new-duration" v-model="newDuration" type="number" min="0" max="500" step="5" />
          <button class="button-add">Add</button>
        </form>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
export default {
  props: {
    todayExercises: Array,
    day: String,
  },
  data() {
    return {
      nextExerciseId: 1,
      newExerciseName: "",
      newDuration: 0,
      exercises: [
        {
          id: 0,
          exerciseName: "",
          duration: 0,
        },
      ],
    };
  },
  methods: {
    addNewExercise() {
      if (this.newExerciseName !== "") {
        this.exercises.push({
          id: this.nextExerciseId++,
          exerciseName: this.newExerciseName,
          duration: this.newDuration,
        });
        this.newExerciseName = "";
        this.newDuration = 0;
      }
    },
    removeExercise(exerciseId: Number) {
      this.exercises = this.exercises.filter((e) => e.id !== exerciseId);
    },
  },
};
</script>
<style scoped>
a {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1vh;
}

.removeButton {
  float: right;
  margin-bottom: 10px;
}

button {
  float: right;
}

.exercise-item-list {
  color: azure;
  width: 100%;
  border-radius: 5px;
  background-color: #a420b0;
  margin-bottom: 10px;
  margin-top: 20px;

  padding: 5px;
}

h2 {
  margin-bottom: 5px;
}

@media (min-width: 580px) {
  .removeButton {
    float: right;
    margin-bottom: 10px;
  }
}
</style>
