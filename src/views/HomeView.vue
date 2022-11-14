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
  <main>
    <div v-if="displayOnlySchedule" class="plan">
      <h1>Planning View</h1>
      <button @click="showOnlySchedule">Schedule Only</button>
    </div>
    <div v-else>
      <h1>Schedule</h1>
      <button @click="showOnlySchedule">Go to Planning View</button>
    </div>
    <div>
      <PlanYourWeek :display-only-schedule="displayOnlySchedule" />
    </div>
  </main>
</template>

<style scoped>
button {
  font-size: 16px;
  height: 32px;
}
</style>
