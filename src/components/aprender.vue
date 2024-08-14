<template>
    <v-card class="knn-card rounded-card  mb-1"  >
      <v-card-title class="d-flex align-center ml-2">
        <v-icon class="icon-small">mdi-school</v-icon>
        <span class="video-title">
          <strong>KNN</strong> | Vamos aprender um pouco mais hoje!
        </span>
      </v-card-title>
  
      <v-card-text style="padding: 20px !important;">
        <div class="video-content">
          <!-- Video 1 -->
          <v-card class="video-item" outlined>
            <v-img
              src="/img/video1.png"
              alt="Video 1"
              class="video-image"
            >
              <v-icon class="play-icon">mdi-play-circle</v-icon>
              <div class="video-caption">
                <div class="caption-text">Demonstrativa KNN</div>
                <div class="description-text1 bg-box">Em alta</div>
              </div>
            </v-img>
          </v-card>
  
          <!-- Video 2 -->
          <v-card class="video-item" outlined>
            <v-img
              src="/img/video2.png"
              alt="Video 2"
              class="video-image"
            >
              <v-icon class="play-icon">mdi-play-circle</v-icon>
              <div class="video-caption">
                <div class="caption-text">Professor KNN</div>
                <div class="description-text bg-box">recente</div>
              </div>
            </v-img>
          </v-card>
  
          <!-- Video 3 -->
          <v-card class="video-item" outlined>
            <v-img
              src="/img/video3.png"
              alt="Video 3"
              class="video-image"
            >
              <v-icon class="play-icon">mdi-play-circle</v-icon>
              <div class="video-caption">
                <div class="caption-text">Coleção de Tweens</div>
                <div class="description-text bg-box">recente</div>
              </div>
            </v-img>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  
  @Component
  export default class KnnCard extends Vue {}
  </script>
  
  <style scoped>
  .rounded-card {
    border-radius: 20px;
    background-color: white;

  }
  .v-card__subtitle,
  .v-card__text,
  .v-card__title {
    padding: 2px !important;
  }
  
  .knn-card {
    width: 100%;
    height: 250px;
    border: 0;
  }
  
  .video-title {
    font-family: 'Articulat CF', sans-serif;
    font-weight: 600;
    font-size: 15px;
    margin-left: 10px;
  }
  
  .icon-small {
    font-size: 16px; /* Tamanho reduzido para ícones */
  }
  
  .video-content {
    display: flex;
    justify-content: space-between;
  }
  
  .video-item {
    width: 33%;
    height: 100%;
    position: relative; /* Permite o posicionamento absoluto dos elementos filhos */
  }
  
  .video-image {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .play-icon {
    position: absolute;
    top: 10%;
    left: 90%;
    transform: translate(-50%, -50%);
    font-size: 25px !important;
    color: white !important;
  }
  
  .video-caption {
  position: absolute;
  bottom: 4px; /* Alinha na parte inferior */
  left: 4px;
  display: flex;
  align-items: center;
  gap: 4px; /* Espaçamento entre o título e o assunto */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
}

.caption-text {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 700 !important;
  font-size: 12px;
  color: rgb(255, 255, 255);
  margin-bottom: 0; /* Remove a margem inferior */
}

.description-text {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 700 !important;
  font-size: 10px; /* Aumenta o tamanho da fonte para combinar com o título */
  color: rgb(255, 255, 255);
  margin-bottom: 0; /* Remove a margem inferior */
  background-color: #645FC9; /* Adiciona um fundo semi-transparente */
  padding: 2px 4px; /* Adiciona padding ao redor do texto do assunto */
  border-radius: 4px; /* Adiciona bordas arredondadas */
}
.description-text1 {
  font-family: 'Articulat CF', sans-serif;
  font-weight: 700 !important;
  font-size: 10px; /* Aumenta o tamanho da fonte para combinar com o título */
  color: rgb(255, 255, 255);
  margin-bottom: 0; /* Remove a margem inferior */
  background-color: #ab1d1d; /* Adiciona um fundo semi-transparente */
  padding: 2px 4px; /* Adiciona padding ao redor do texto do assunto */
  border-radius: 4px; /* Adiciona bordas arredondadas */
}



  </style>
  