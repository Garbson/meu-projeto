<template>
  <v-card class="jornal-card rounded-card pa-2 mb-1">
    <v-card-title class="d-flex align-center">
      <span class="text-subtitle2 d-flex align-center">
        <v-icon left>mdi-newspaper</v-icon>
        <span class="titulo section-header"
          ><strong>The Journey</strong> | Publicações & Podcasts
        </span>
      </span>
    </v-card-title>

    <v-card-text>
      <div class="jornal-content">
        <!-- Card 1 -->
        <v-card class="jornal-item">
          <v-img src="/img/jornal2.png" alt="Imagem" class="jornal-image" />
          <div class="jornal-caption">
            <div class="caption-text">Lorem ipsum dolor sit</div>
            <div class="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div class="jornal-footer">
            <v-icon class="icon-small">mdi-calendar</v-icon>
            <span class="date">14/08/2024</span>
            <v-icon class="icon-small">mdi-file-document</v-icon>
            <span class="topic">Convenção KNN</span>
          </div>
        </v-card>

        <!-- Card 2 -->
        <v-card class="jornal-item">
          <v-img src="/img/jornal1.png" alt="Imagem" class="jornal-image" />
          <div class="jornal-caption">
            <div class="caption-text">Lorem ipsum dolor sit</div>
            <div class="description-text">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div class="jornal-footer">
            <v-icon class="icon-small">mdi-calendar</v-icon>
            <span class="date">15/08/2024</span>
            <v-icon class="icon-small">mdi-file-document</v-icon>
            <span class="topic">Evento Vue.js</span>
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
export default class Jornal extends Vue {}
</script>

<style scoped>
.rounded-card {
  border-radius: 8px;
  background-color: white;
  border-radius: 20px !important;
}

.titulo {
  font-size: 14px; /* Tamanho reduzido */
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 0px;
}

.jornal-card {
  width: 100%;
  height: 250px;
  gap: 10px;
}

.jornal-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.jornal-card .title {
  font-family: "Articulat CF", sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.jornal-content {
  display: flex;
  justify-content: space-between;
  gap: 20px !important; /* Espaço entre os dois cards menores */
}

.jornal-item {
  width: 50%;
  height: 190px;
  display: flex;
  flex-direction: column;
}

.jornal-image {
  width: 100%;
  height: 10px;
}

.jornal-caption {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}

.caption-text {
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-size: 12px !important;
}

.description-text {
  font-family: "Articulat CF", sans-serif;
  font-weight: 500;
  font-size: 11px;
}

.jornal-footer {
  display: flex;
  align-items: center;
  gap: 4px;
}

.date {
  font-family: "Articulat CF", sans-serif;
  font-weight: 500;
  font-size: 11px;
  color: #a2afbd;
}

.topic {
  font-family: "Articulat CF", sans-serif;
  font-weight: 500;
  font-size: 11px;
  color: #a2afbd;
}

.icon-small {
  font-size: 15px !important;
}
</style>
