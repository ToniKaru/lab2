<script lang="ts">
import PlanYourWeek from "@/components/PlanYourWeek.vue";

export default {
  name: "PlanningView",
  components: {
    PlanYourWeek,
  },

  data() {
    return {
      displayOnlySchedule: false,
      displayPlanner: true,
    };
  },
  methods: {
    showOnlySchedule() {
      if (!this.displayOnlySchedule) {
        this.displayPlanner = false;
        this.displayOnlySchedule = true;
      } else {
        this.displayPlanner = true;
        this.displayOnlySchedule = false;
      }
    },
  },
};
</script>

<template>
  <div v-if="displayOnlySchedule" class="plan">
    <h1>Planning View</h1>
    <button @click="showOnlySchedule">Schedule Only</button>
  </div>
  <div v-else>
    <h1>Schedule View</h1>
    <button @click="showOnlySchedule">Planner</button>
  </div>
  <div>
    <PlanYourWeek :display-only-schedule="displayOnlySchedule" />
  </div>
</template>

<style scoped></style>
