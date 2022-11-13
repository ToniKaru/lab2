<template>
  <body>
    <div class="day-of-week">
      <h2>{{ day }}</h2>
      <div id="add-exercise">
        <form @submit.prevent="addNewExercise">
          <input
            id="new-exercise"
            v-model="newExerciseName"
            placeholder="e.g. Jumping Jacks"
            required />
          <input
            id="new-duration"
            v-model="newDuration"
            type="number"
            min="0"
            max="500"
            step="5"/>
          <button class="button-add">Add</button>
        </form>
        <div
          class="exercise-item-list"
          v-for="(exercise, index) in exercises"
          v-bind:key="index">
          <div v-if="exercises[index].exerciseName !== ''">
            <a> {{ exercise.exerciseName }}</a>
              <a>{{ exercise.duration }}min</a>
            <button class="removeButton" @click="removeExercise(exercise.id)">
              Remove
            </button>
          </div>
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
    color: azure;
    display: flex;
    width: 25vw;
    background-color: #a420b0;
    justify-content: center;
}

exercise-item-list {
    background-color: #a420b0;
}

h2 {
    margin-bottom: 5px;
}
</style>