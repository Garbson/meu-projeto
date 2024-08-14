<template>
    <v-card class="rounded-card arquivos-card">
      <v-card-title class="d-flex align-center justify-space-between ml-1">
        <span class="text-subtitle2 d-flex align-center">
          <v-icon  left>mdi-folder-outline</v-icon>
          <span class="section-header">Arquivo Recente</span>
        </span>
        <v-btn icon>
          <v-icon  >mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="image-container">
          <v-img
            src="/img/recentes.png"
            alt="Imagem recente"
            width="100%"
            height="90%"
            class="rounded"
          ></v-img>
        </div>      
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  
  @Component
  export default class ArquivosRecentes extends Vue {}
  </script>
  
  <style scoped>
  .rounded-card {
    border-radius: 20px;
  }
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding: 0px !important;
  }
  
  .arquivos-card {
    width: 100%;
    height: 250px;
  }
  
  .section-header {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
  
  .image-container{
    margin: 0 auto;
    padding: 5px;
    border-radius: 20px;
  }
  
  .file-details {
    font-size: 0.625rem; /* Aproximadamente 10px */
    color: gray;
  }
  
  .file-name {
    font-size: 0.75rem; /* Aproximadamente 12px */
    margin-bottom: 2px;
  }
  
  .file-date {
    font-size: 0.625rem; /* Aproximadamente 10px */
    color: grey;
    display: flex;
    align-items: center;
  }
  
  .file-date v-icon {
    font-size: 0.625rem; /* Diminuir o tamanho do ícone */
    margin-right: 4px;
  }
  .v-icon-titulo {
    font-size: 24px !important; 
  }
  </style>
  