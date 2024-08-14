<template>
  <v-card class="news-container rounded-card pa-2">
    <v-card-title class="d-flex align-center">
      <span class="text-subtitle2 d-flex align-center">
        <v-icon left class="icon-small">mdi-newspaper-variant</v-icon>
        <span class="titulo section-header">
          <strong>KNN Dream Hub</strong> | Descobra Novas oportunidades
        </span>
      </span>
    </v-card-title>

    <v-card-text>
      <div class="cards-wrapper">
        <!-- Primeiro Card -->
        <v-card class="news-card rounded-card mb-1">
          <v-img
            src="/img/dream1.png"
            alt="News Image"
            class="news-image"
          ></v-img>
          <div style="padding: 5px">
            <div class="news-subtitle">Trabalho no exterior</div>
            <div class="news-text">Lorem ipsum dolor sit.</div>
          </div>
        </v-card>

        <!-- Segundo Card -->
        <v-card class="news-card rounded-card mb-1">
          <v-img
            src="/img/dream2.png"
            alt="News Image"
            class="news-image"
          ></v-img>
          <div style="padding: 5px">
            <div class="news-subtitle">Trabalho no exterior</div>
            <div class="news-text">Lorem ipsum dolor sit.</div>
          </div>
        </v-card>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class NewsContainer extends Vue {}
</script>

<style scoped>
.rounded-card {
  border-radius: 8px;
  background-color: white;
  border-radius: 20px !important;
}
.v-icon {
  font-size: 15px !important;
}

.news-container {
  width: 100%; /* Largura especificada */
  height: 250px; /* Altura especificada */
  padding: 0px; /* Espaçamento interno */
}

.titulo {
  font-size: 14px;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 2px !important;
}

.cards-wrapper {
  display: flex;
  gap: 20px; /* Espaço entre os cartões */
}

.news-card {
  width: 100%; /* Largura especificada */
  height: 180px; /* Altura especificada */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-image {
  width: 100%;
  height: 70px !important; /* Ajuste para manter a proporção e espaço para texto */
}

.news-subtitle {
  margin-top: 8px;
  height: 20px;
  width: 60%;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-size: 10px;
  background-color: #645fc9; /* Cor de fundo roxa */
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-text {
  margin-top: 4px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: black;
}
.icon-small {
  font-size: 24px !important;
}
</style>
