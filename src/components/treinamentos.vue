<template>
  <v-card class="rounded-card pa-2 mb-1">
    <v-card-title class="d-flex  align-center justify-space-between">
      <span class="titulo d-flex align-center">
        <v-icon class="title-icon" left>mdi-school-outline</v-icon>
        Novos Treinamentos
      </span>
        <v-icon right>mdi-chevron-right</v-icon>
    </v-card-title>

    <v-card-text>
      <div class="trainings-wrapper">
        <!-- Treinamento 1 -->
        <v-card class="training-card pa-2 mb-2" outlined>
          <div class="header">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Avatar"
              class="training-image"
            />
            <div class="infor">
              <div class="name">John Doe</div>
              <div class="subject">Vue.js</div>
            </div>
            <v-btn icon class="doc-btn">
              <v-icon class="btn1">mdi-file-document</v-icon>
            </v-btn>
          </div>
          <div class="description">
            <div class="text-caption text-bold text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula cursus nulla, et commodo lorem faucibus sit amet. Vivamus
              vel nulla vitae urna luctus sodales.
            </div>
          </div>
          <div>
            <div class="details">
              <div class="date"><v-icon class="icon">mdi-calendar</v-icon> 14/08/2024</div>
              <div class="time"><v-icon class="icon">mdi-clock</v-icon> 14:00 às 15:00</div>
            </div>
            <div class="rating">
              <v-icon v-for="i in 4" :key="'star-' + i" class="filled-star"
                >mdi-star</v-icon
              >
              <v-icon class="empty-star">mdi-star-outline</v-icon>
            </div>
            <div class="buttons">
              <!-- <v-btn class="button-action" outlined >Avaliar</v-btn> -->
              <v-btn class="button-action" outlined >Descrição</v-btn>
              <v-btn class="button-action entrar-agora">Entrar</v-btn>
            </div>
          </div>
        </v-card>

        <!-- Treinamento 2 -->
        <v-card class="training-card pa-2 mb-2" outlined>
          <div class="header">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Avatar"
              class="training-image"
            />
            <div class="infor">
              <div class="name">Jane Smith</div>
              <div class="subject">Tailwind</div>
            </div>
            <v-btn icon class="doc-btn">
              <v-icon icon class="btn1">mdi-file-document</v-icon>
            </v-btn>
          </div>
          <div class="description">
            <div class="text-caption text-bold text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vivamus vel nulla vitae urna luctus sodales.
            </div>
          </div>
          <div>
            <div class="details">
              <div class="date"><v-icon class="icon">mdi-calendar</v-icon> 15/08/2024</div>
              <div class="time"><v-icon class="icon">mdi-clock</v-icon> 14:00 às 15:00</div>
            </div>
            <div class="rating">
              <v-icon v-for="i in 4" :key="'star-' + i" class="filled-star"
                >mdi-star</v-icon
              >
              <v-icon class="empty-star">mdi-star-outline</v-icon>
            </div>
            <div class="buttons">
              <!-- <v-btn class="button-action" outlined >Avaliar</v-btn> -->
              <v-btn class="button-action" outlined >Descrição</v-btn>
              <v-btn class="button-action entrar-agora">Entrar</v-btn>
            </div>
          </div>
        </v-card>

        <!-- Treinamento 3 -->
        <v-card class="training-card pa-2 mb-2" outlined>
          <div class="header">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Avatar"
              class="training-image"
            />
            <div class="infor">
              <div class="name">Alex Johnson</div>
              <div class="subject">Nuxt.js</div>
            </div>
            <v-btn icon class="doc-btn">
              <v-icon class="btn1">mdi-file-document</v-icon>
            </v-btn>
          </div>
          <div class="description">
            <div class="text-caption text-bold text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel nulla vitae urna luctus sodales.
            </div>
          </div>
          <div>
            <div class="details">
              <div class="date"><v-icon class="icon">mdi-calendar</v-icon> 16/08/2024</div>
              <div class="time"><v-icon class="icon">mdi-clock</v-icon> 14:00 às 15:00</div>
            </div>
            <div class="rating">
              <v-icon v-for="i in 4" :key="'star-' + i" class="filled-star"
                >mdi-star</v-icon
              >
              <v-icon class="empty-star">mdi-star-outline</v-icon>
            </div>
            <div class="buttons">
              <!-- <v-btn class="button-action" outlined >Avaliar</v-btn> -->
              <v-btn class="button-action" outlined >descrição</v-btn>
              <v-btn class="button-action entrar-agora">Entrar</v-btn>
            </div>
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
export default class NovosTreinamentosCard extends Vue {}
</script>

<style scoped>
.rounded-card {
  border-radius: 20px !important;
  background-color: white;
  width: 100% !important;
  height: 250px;
}

.titulo {
  font-family: "Articulat CF", sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.title-icon {
  font-size: 20px; /* Ajuste o tamanho do emoji */
  color: #D6D3FF; /* Cor do emoji */
  margin-right: 8px; /* Espaço entre o emoji e o título */
}

.doc-btn {
  margin-left: 22px;
  background: #D6D3FF;
  color: #645FC9 !important;
  

}

.btn1{
  font-size: 12px !important;
}

.trainings-wrapper {
  display: flex;
  gap: 8px;
}

.training-card {
  width: 33.3%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  align-items: center;
  gap: 3px;
}

.training-image {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.infor {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.name {
  font-family: "Articulat CF", sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.subject {
  font-family: "Articulat CF", sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: #a2afbd;
}

.description {
  max-height: 100px;
  overflow: hidden;
  font-family: "Articulat CF", sans-serif;
  font-weight: 700;
  font-size: 15px;
}

.details {
  display: flex;
  align-items: center;
  gap: 4px;
}

.date,
.time {
  font-family: "Articulat CF", sans-serif;
  font-weight: 600;
  font-size: 9px !important;
  color: #a2afbd; 
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
}


.filled-star {
  color: #f5c518;
  font-size: 12px !important;
}

.empty-star {
  color: #e0e0e0;
  font-size: 10px !important;
}

.buttons {
  display: flex;
  margin-top: 8px;
  gap: 5px;
}

.button-action {
  border-radius: 20px;
  font-size: 8px !important;
  height: 15px !important;
  padding: 0; /* Remove padding */
}

.entrar-agora {
  background: #E5A827;
  color: white;
  background-color: #645FC9 !important;
}
.icon{
  font-size: 15px !important;
  color: rgb(149, 146, 146) !important;
}
</style>
