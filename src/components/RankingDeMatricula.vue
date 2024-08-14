<template>
  <v-card class="ranking-card rounded-card">
    <v-card-title class="d-flex align-center justify-space-between title-bar">
      <span class="text-subtitle2 d-flex align-center">
        <v-icon icon-small left>mdi-trophy-outline</v-icon>
        <span class="section-header">Ranking </span>
      </span>
      <div class="d-flex align-center buttons">
        <div class="botoes-juntos d-flex align-center">
          <v-btn small class="mr-2 geral-btn"><span>Geral</span></v-btn>
          <v-btn color="#E6EDF4" small elevation="0" class="mr-2"><span>Implantação</span></v-btn>
        </div>
        
        <v-select
          v-model="selectedRegion"
          :items="regions"
          hide-details
          dense
          class="mr-2 select-style"
          style="width: 110px"
          placeholder="Região"
        ></v-select>
        <v-select
          v-model="selectedMonth"
          :items="months"
          hide-details
          class="select-style"
          dense
          style="width: 110px"
          placeholder="Mês"
        ></v-select>
      </div>
    </v-card-title>
    <v-card-text class="ranking-content">
      <div class="ranking-table">
        <div class="ranking-column">
          <strong>Matrícula escolas</strong>
          <ol>
            <li>
              <span class="school-name"> 1º Escola A</span>
              <span class="school-score">Pontuação: 85</span>
            </li>
            <li>
              <span class="school-name">2º Escola B</span>
              <span class="school-score">Pontuação: 80</span>
            </li>
            <li>
              <span class="school-name">3º Escola C</span>
              <span class="school-score">Pontuação: 75</span>
            </li>
          </ol>
        </div>
        <div class="ranking-column">
          <strong>Matricula escolas</strong>
          <ol>
            <li>
              <span class="school-name">1º Escola D</span>
              <span class="school-score">Pontuação: 90</span>
            </li>
            <li>
              <span class="school-name">2º Escola E</span>
              <span class="school-score">Pontuação: 88</span>
            </li>
            <li>
              <span class="school-name"> 3º Escola F</span>
              <span class="school-score">Pontuação: 85</span>
            </li>
          </ol>
        </div>
        <div class="ranking-column">
          <strong>Visitas CDA/BDR</strong>
          <ol>
            <li>
              <span class="school-name">1º Escola G</span>
              <span class="school-score">Pontuação: 92</span>
            </li>
            <li>
              <span class="school-name">2º Escola H</span>
              <span class="school-score">Pontuação: 89</span>
            </li>
            <li>
              <span class="school-name">3º Escola I</span>
              <span class="school-score">Pontuação: 87</span>
            </li>
          </ol>
        </div>
        <div class="ranking-column">
          <strong>Matriculas escolas</strong>
          <ol>
            <li>
              <span class="school-name">1º Escola J</span>
              <span class="school-score">Pontuação: 93</span>
            </li>
            <li>
              <span class="school-name"> 2º Escola K</span>
              <span class="school-score">Pontuação: 90</span>
            </li>
            <li>
              <span class="school-name">3º Escola L</span>
              <span class="school-score">Pontuação: 88</span>
            </li>
          </ol>
        </div>
        <div class="ranking-column">
          <strong>franqueadas</strong>
          <ol>
            <li>
              <span class="school-name">1º Escola M</span>
              <span class="school-score">Pontuação: 91</span>
            </li>
            <li>
              <span class="school-name">2º Escola N</span>
              <span class="school-score">Pontuação: 89</span>
            </li>
            <li>
              <span class="school-name"> 3º Escola O</span>
              <span class="school-score">Pontuação: 86</span>
            </li>
          </ol>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class RankingDeMatricula extends Vue {
  selectedRegion = "";
  selectedMonth = "";

  regions = ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"];
  months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
}
</script>

<style scoped>
.ranking-card {
  width: 100%;
  height: 250px;
  padding: 10px;
}

.rounded-card {
    border-radius: 20px !important;
  }

.icon-small {
  font-size: 16px;
}

.rounded-card {
  border-radius: 20px;
}

.title-bar {
  padding: 0 8px;
}

.section-header {
  font-family: "Articulat CF", sans-serif;
  font-weight: 600;
  font-size: 15px;
}

.buttons .v-btn,
.buttons .v-select {
  font-size: 0.5rem !important;
  padding: 0 3px;
  height: 24px;
  min-height: 20px;
}

/* Botão "Geral" com fundo roxo e bordas arredondadas */
.geral-btn {
  background-color: #645fc9 !important;
  color: white;
  border-radius: 20px;
}

/* Estilo para o v-select */
.select-style {
  background-color: #E6EDF4 !important;
  border-radius: 20px !important;
}

.botoes-juntos{
  background-color: #E6EDF4;
  border-radius: 20px;
  margin-right: 15px;
}

.ranking-table {
  display: flex;
  justify-content: space-between;
}

.ranking-column {
  width: 18%;
  font-size: 0.6rem;
}

.ranking-column strong {
  font-size: 0.75rem;
  display: block;
  margin-bottom: 2px;
  margin-top: 10px;
}

.ranking-column ol {
  padding-left: 0px !important;
  margin: 0;
  list-style: none;
}

.ranking-column ol li {
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
}

.school-score {
  font-size: 0.625rem;
  color: grey;
}
</style>
