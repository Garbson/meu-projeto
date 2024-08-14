<template>
  <v-app class="all">
    <v-main>
      <v-container>
      <Navbar />
      <hr />
      <Pedidos />
      <Tabela />
    </v-container>
  </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/navbar.vue";
import Pedidos from "@/components/pedidos.vue";
import Tabela from "@/components/tabela.vue";

@Component({
  components: {
    Navbar,
    Pedidos,
    Tabela,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.all {
  background-color: #f4f6f8 !important; /* Cor de fundo cinza claro */
  min-height: 100vh; /* Garantir que o fundo cubra a tela inteira */
}

hr {
  margin-top: 20px;
  width: 100%; /* Largura do hr */
  border: 1px solid #ceced1; /* Cor e espessura da borda */
  margin-left: 0; /* Alinha à esquerda */
  display: block; /* Garante que o hr seja um bloco */
  border-radius: 20px;
}
</style>
