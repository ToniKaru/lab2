<template>
  <body>
    <div class="day-of-week">
      <h2>{{ day }}</h2>
      <div
        class="exercise-item-list"
        v-for="(exercise, index) in exercises"
        v-bind:key="index">
        <div v-if="exercises[index].exerciseName !== ''">
          <a> {{ exercise.exerciseName }}</a>
          <a>{{ exercise.duration }}min</a>
          <button
            v-show="displayOnlySchedule"
            class="removeButton"
            @click="removeExercise(exercise.id)">
            Remove
          </button>
        </div>
      </div>
      <div v-show="displayOnlySchedule" id="add-exercise">
        <form
          action="/action_page.php"
          method="get"
          @submit.prevent="addNewExercise">
          <input
            id="new-exercise"
            v-model="newExerciseName"
            list="exercises"
            name="exercise"
            placeholder="e.g. Jumping Jacks"
            required />
          <datalist id="exercises">
            <option value="Aerobics" />
            <option value="Cycling" />
            <option value="Chin-ups" />
            <option value="Dancing" />
            <option value="Hiking" />
            <option value="Jogging" />
            <option value="Jumping Jacks" />
            <option value="Push-ups" />
            <option value="Running" />
            <option value="Sit-ups" />
            <option value="Squats" />
            <option value="Stretching" />
            <option value="Strength Training" />
            <option value="Swimming" />
            <option value="Walking" />
            <option value="Weight Lifting" />
            <option value="Yoga" />
          </datalist>
          <input
            id="new-duration"
            v-model="newDuration"
            type="number"
            min="0"
            max="500"
            step="5" />min
          <button class="button-add">Add</button>
        </form>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
export default {
  name: "ExeciseItem",
  props: {
    todayExercises: Array,
    day: String,
    displayOnlySchedule: Boolean,
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
  justify-content: center;
  margin-bottom: 1vh;
  text-align: center;
  width: 100%;
}

.removeButton {
  background-color: azure;
  border-color: #a420b0;
  color: #a420b0;
  margin-bottom: 10px;
}

button {
  float: right;
}

.exercise-item-list {
  border-radius: 5px;
  background-color: #a420b0;
  color: azure;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 20px;
  width: 100%;
}

h2 {
  margin-bottom: 5px;
}

#new-exercise {
  width: 50vw;
}

@media (min-width: 580px) {
  .removeButton {
    float: right;
    margin-bottom: 10px;
  }

  #new-exercise {
    min-width: 12vw;
    width: 100%;
  }
}
</style>
