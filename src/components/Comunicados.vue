<template>
    <v-card class="pa-1 rounded-card content-height">
      <v-card-title class="titulo d-flex align-center justify-space-between ml-1">
        <span class="titulo text-subtitle2 d-flex align-center">
          <v-icon left>mdi-bullhorn-outline</v-icon>
          Comunicados
        </span>
        <v-icon>mdi-chevron-right</v-icon>
      </v-card-title>
      <v-card-text class="d-flex flex-column" style="padding: 10px !important;">
        <div
          class="comunicado mb-1"
          v-for="comunicado in comunicados"
          :key="comunicado.id"
          @click="navigateTo(comunicado.id)"
        >
          <div class="comunicado-title d-flex justify-space-between align-center">
            <span class="d-flex align-center">
              {{ comunicado.title }}
            </span>
            <v-icon>mdi-chevron-right</v-icon>
          </div>
          <div class="comunicado-text">{{ comunicado.text }}</div>
          <div class="comunicado-date-time">
            <v-icon left small>mdi-calendar-outline</v-icon>
            {{ comunicado.date }} 
            <v-icon left small>mdi-clock-outline</v-icon>
            {{ comunicado.time }}
          </div>
          <hr class="my-1" v-if="index < comunicados.length - 1" v-for="(comunicado, index) in comunicados" :key="index"/>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  
  @Component
  export default class Comunicados extends Vue {
    comunicados = [
      {
        id: "comunicado1",
        title: "Diretoria",
        text: "Texto do comunicado.",
        date: "12/08/2024",
        time: "14:00",
      },
      {
        id: "comunicado2",
        title: "Importante",
        text: "Mais informações relevantes.",
        date: "13/08/2024",
        time: "09:30",
      },
    ];
  
    navigateTo(comunicadoId: string) {
      console.log(`Navegando para ${comunicadoId}`);
    }
  }
  </script>
  
  <style scoped>
  .rounded-card {
    border-radius: 20px;
    width: 100%;
    height: 250px;
  }
  
  .titulo {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 2px;
  }
  
  .comunicado {
    overflow: hidden !important;
  }
  
  
  
  .comunicado-text {
    font-size: 0.75rem;
    font-weight: 700; /* Tamanho aumentado */
  }
  
  .comunicado-date-time {
    font-size: 0.7rem;
    color: grey;
    display: flex;
    align-items: center;
  }
  
  .comunicado-date-time v-icon {
    margin-left: 4px; /* Ajustado para ícones menores */
  }
  
  hr {
    border-top: 1px solid #e0e0e0;
    margin: 0;
  }
  </style>
  