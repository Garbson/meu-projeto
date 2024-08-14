<template>
  <v-card class="pa-1 rounded-card content-height ml-1">
    <v-card-title class="d-flex justify-space-between align-center">
      <span class="titulo text-subtitle2 d-flex align-center">
        <v-icon left>mdi-calendar-outline</v-icon>
        Agenda
      </span>
      <v-icon>mdi-chevron-right</v-icon>
    </v-card-title>
    <v-card-text class="d-flex flex-column" style="padding: 10px !important;">
      <div class="calendar-header">Agosto 2024</div>
      <v-calendar
        ref="calendar"
        v-model="selectedDate"
        color="primary"
        class="calendar"
        width="100%"
        height="100%"
        :events="[]"
        :event-color="() => ''"
        :day-class="() => 'calendar-day'"
        :weekday-class="() => 'calendar-weekday'"
      ></v-calendar>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { VCalendar } from "vuetify/lib";

@Component({
  components: {
    VCalendar,
  },
})
export default class Agenda extends Vue {
  selectedDate: string = "";
}
</script>

<style scoped>
.rounded-card {
  border-radius: 20px !important;
  width: 100%;
  height: 250px;
}
.titulo {
  font-family: "Articulat CF", sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 2px !important;
}

.calendar {
  width: 100%;
  height: 160px; 
}

.v-calendar {
  border: none; 
}

.v-calendar__week {
  border: none !important; 
}

.v-calendar__day {
  border: none !important; 
}

.calendar-day {
  border: none !important; 
}

.calendar-weekday {
  border: none !important; 
}

.v-calendar__day--selected {
  background-color: transparent; 
}
</style>
