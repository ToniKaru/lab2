<script lang="ts">
import ExerciseItem from "@/components/ExerciseItem.vue";

export default {
  components: {
    ExerciseItem,
  },
  data() {
    return {
      todayExercises: [],
    };
  },
};
</script>

<template>
  <div class="week-details">
    <ExerciseItem :today-exercises="todayExercises" :day="'Monday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Tuesday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Wednesday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Thursday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Friday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Saturday'" />
    <ExerciseItem :today-exercises="todayExercises" :day="'Sunday'" />
  </div>
</template>

<style scoped>
.week-details {
  display: flex;
  flex-direction: column;
  width: 70vw;
}

@media (min-width: 580px) {
  .week-details {
    display: flex;
    flex-direction: row;
    width: 12vw;
  }
}
</style>