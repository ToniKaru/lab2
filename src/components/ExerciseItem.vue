<template>
  <body>
    <div class="dayOfWeek">
      <h2>today</h2>
      <div id="exercise-item-list">
        <input id="new-exercise" v-model="newExerciseName" placeholder="e.g. Jumping Jacks" />
        <input id="new-duration" v-model="newDuration" type="number" min="1" max="500" />
        <button @click="addNewExercise">Add</button>

        <div class="exercise-items" v-for="(exercise, index) in exercises" v-bind:key="index">
          <a> {{ exercise.exerciseName }} {{ exercise.duration }}min</a>
          <button class="removeButton" @click="removeExercise(exercise.id)">Remove</button>
        </div>
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
          id: 1,
          exerciseName: "Test",
          duration: 10,
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
