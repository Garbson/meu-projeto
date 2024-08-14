<template>
    <v-card class="rounded-card tarefas-card">
      <v-card-title class="d-flex align-center justify-space-between ml-1">
        <span class="text-subtitle2 d-flex align-center">
          <v-icon small left class="v-icon-titulo">mdi-calendar-outline</v-icon>
          <span class="task-header">Tarefas do Dia</span>
        </span>
        <v-btn icon>
          <v-icon >mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text style="padding: 10px !important;">
        <div v-for="(task, index) in tasks" :key="index">
          <div class="task-title">
            <strong>{{ task.title }}</strong>
          </div>
          <div class="task-info d-flex align-center justify-space-between">
            <span class="task-description">{{ task.description }}</span>
            <div class="task-time d-flex align-center">
              <v-icon x-small left>mdi-clock-outline</v-icon>
              <span>{{ task.time }}</span>
            </div>
          </div>
          <hr />
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  
  @Component
  export default class TarefasDoDia extends Vue {
    tasks = [
      {
        title: "Lorem Ipsum,",
        description: "Treinamento",
        time: "14:00 - 12:00",
      },
      {
        title: "Lorem Ipsum",
        description: "Reunião",
        time: "14:00 - 12:00",
      },
      {
        title: "Lorem Ipsum",
        description: "Daily",
        time: "14:00 - 12:00",
      },
      {
        title: "Lorem Ipsum",
        description: "Daily",
        time: "14:00 - 12:00",
      },
    ];
  }
  </script>
  
  <style scoped>
  .rounded-card {
    border-radius: 80px;
  }
  
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 2px !important;
  }
  
  .tarefas-card {
    width: 100%;
    height: 250px;
  }
  
  
  .task-header {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
  
  .task-title {
    font-size: 0.75rem; 
    margin-bottom: 2px;
  }
  
  .task-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .task-description {
    font-size: 0.7rem; 
    color: #645FC9;
    flex-grow: 1; 
  }
  
  .task-time {
    font-size: 0.625rem;
    color: grey;
    display: flex;
    align-items: center;
    margin-left: 5px; 
  }
  
  .task-time v-icon {
    font-size: 0.5rem; 
  }
  
  .hr {
    border-top: 1px solid #e0e0e0;
    margin: 0;
  }
  
  .v-icon-titulo {
    font-size: 24px !important; 
  }
  </style>
  