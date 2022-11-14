<script lang="ts">
import ExerciseItem from "@/components/ExerciseItem.vue";

export default {
  props: {
    displayOnlySchedule: Boolean,
  },
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
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Monday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Tuesday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Wednesday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Thursday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Friday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Saturday'" />
    <ExerciseItem
      class="weekday"
      :display-only-schedule="displayOnlySchedule"
      :today-exercises="todayExercises"
      :day="'Sunday'" />
  </div>
</template>

<style scoped>
.week-details {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}

.weekday {
  width: 100%;
}

@media (min-width: 580px) {
  .week-details {
    display: flex;
    flex-direction: row;
    width: 12vw;
  }
}
</style>
