<template>
  <v-app style="margin-left: 20px">
    <v-main class="all">
      <v-container>
        <Navbar />
        <v-row class="custom-row">
          <v-col cols="12" md="6" lg="7">
            <v-img
              src="/img/italia.png"
              alt="Imagem da Itália"
              width="100%"
              height="250px"
              class="mb-4 rounded"
            />
          </v-col>

          <!-- Comunicados e Agenda -->
          <v-col cols="12" md="4" lg="5" class="mr-4">
            <v-row>
              <v-col cols="6">
                <Comunicados />
              </v-col>
              <v-col cols="6">
                <Agenda />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="custom-row">
          <!-- Treinamentos -->
          <v-col cols="12" md="7" lg="7">
            <Treinamentos />
          </v-col>

          <!-- Arquivos Recentes e Tarefas Do Dia -->
          <v-col cols="12" md="1" lg="5" class="mr-4">
            <v-row>
              <v-col cols="6">
                <ArquivosRecentes />
              </v-col>
              <v-col cols="6">
                <TarefasDoDia />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="custom-row">
          <!-- Ranking de Matrícula -->
          <v-col cols="12" md="7" lg="7">
            <RankingDeMatricula />
          </v-col>

          <!-- Jornal -->
          <v-col cols="12" md="1" lg="5" class="mr-4">
            <Jornal />
          </v-col>
        </v-row>

        <v-row class="custom-row">
          <!-- Aprender -->
          <v-col cols="12" md="7" lg="7">
            <Aprender />
          </v-col>

          <!-- Dream -->
          <v-col cols="12" md="1" lg="5" class="mr-4">
            <Dream />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Drawer from "@/components/Drawer.vue";
import Navbar from "@/components/navbar.vue";
import Treinamentos from "@/components/treinamentos.vue";
import TarefasDoDia from "@/components/TarefasDoDia.vue";
import ArquivosRecentes from "@/components/ArquivosRecentes.vue";
import RankingDeMatricula from "@/components/RankingDeMatricula.vue";
import Comunicados from "@/components/Comunicados.vue";
import Agenda from "@/components/Agenda.vue";
import Jornal from "@/components/Jornal.vue";
import Aprender from "@/components/aprender.vue";
import Dream from "@/components/Dream.vue";

@Component({
  components: {
    Drawer,
    Navbar,
    Treinamentos,
    TarefasDoDia,
    ArquivosRecentes,
    RankingDeMatricula,
    Comunicados,
    Agenda,
    Jornal,
    Aprender,
    Dream,
  },
})
export default class Home extends Vue {
  drawer = true;
}
</script>

<style scoped>
.all {
  background-color: #f4f6f8 !important; /* Cor de fundo cinza claro */
  min-height: 100vh; /* Garantir que o fundo cubra a tela inteira */
}

.custom-row {
  display: flex;
  flex-wrap: nowrap;
}

@media (max-width: 960px) {
  .custom-row {
    flex-direction: column;
  }
}
</style>
