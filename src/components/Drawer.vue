<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    class="styled-drawer"
    :mini-variant.sync="mini"
    :width="isMini ? 56 : 240"
    height="689px"
    width="193px"
    color="#F4F6F8"
    disable-resize-watcher
    floating
  >
    <v-list-item class="drawer-header">
      <v-list-item-content>
        <v-img
          src="/img/master.png"
          alt="Header Image"
          contain
          class="drawer-header-image"
        />
      </v-list-item-content>
    </v-list-item>
    <v-list dense>
      <v-list-item
        link
        :to="{ name: 'Dashboard' }"
        :class="{ 'active-page': $route.name === 'Dashboard' }"
      >
        <v-list-item-content>
          <v-list-item-title class="list-item-title list-item-with-arrow">
            <img src="/img/drasboard.png" alt="" />
            Dashboard
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        color="primary"
         :to="'/pedidos'"
        :class="{ 'active-page': $route.path === '/pedidos' }"
      >
        <v-list-item-content >
          <v-list-item-title class="list-item-title">
            <v-icon small>fa-solid fa-book</v-icon>
            Pedido de Livro
          </v-list-item-title>
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title">
            <img src="/img/big.png" alt="" />
            Big Numbers</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title">
            <img src="/img/treinamento.png" alt="" />
            Treinamentos</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/Knn.png" alt="" /> KNN Academy</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/painel.png" alt="" /> Painel
            Administrativo</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/ticket.png" alt="" />
            Tickets/chamados</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/fale.png" alt="" /> Fale com outros
            setores</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <!--  Barra de Pesquisa -->
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            placeholder="Buscar modulos"
            outlined
            dense
            hide-details
            class="search-bar"
            rounded
            xx-small
          />
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/acoes.png" alt="" /> Ações &
            projetos</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/area.png" alt="" /> Area do
            colaborador</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/expansão.png" alt="" /> Expansão</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/expedição.png" alt="" />
            Expedição</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/financeiro.png" alt="" />
            Financeiro</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/juridico.png" alt="" /> juridico</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="list-item-title"
            ><img src="/img/marketing.png" alt="" />
            Marketing</v-list-item-title
          >
        </v-list-item-content>
        <v-icon class="list-item-arrow">mdi-chevron-right</v-icon>
      </v-list-item>

      <!-- Divider -->
      <v-divider></v-divider>

      <!-- User Profile Item -->
      <v-list-item class="user-profile-item" link>
        <v-list-item-avatar
          size="25"
          style="padding: 0"
          class="avatar-container"
        >
          <v-img src="/img/usuario.png" alt="User Avatar" />
        </v-list-item-avatar>

        <div class="user-profile-text">
          <v-list-item-title class="user-profile-title">
            Roberta da Silva Campos
          </v-list-item-title>
          <v-list-item-subtitle class="user-profile-subtitle">
            roberta.silva@example.com
          </v-list-item-subtitle>
        </div>

        <!-- Botão com três pontinhos -->
        <v-btn icon class="more-options-btn">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: false,
    };
  },
  computed: {
    isMini() {
      return this.mini;
    },
  },
};
</script>
<style scoped>
/* Import the Articulat CF font */
@import url("https://fonts.googleapis.com/css2?family=Articulat+CF:wght@500&display=swap");

.styled-drawer {
  background-color: #f4f6f8;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  font-family: "Articulat CF", sans-serif;
  margin-left: 12px;
  margin-top: 12px;
}

.list-item-title {
  font-family: "Articulat CF", sans-serif;
  font-size: 10px;
  font-weight: 600;
  text-align: left;
  color: #5e6d7e;
}

.drawer-header-image {
  width: 104px;
  height: 30px;
  padding: 0;
}

.v-list-item {
  display: flex;
  align-items: center;
}

.avatar-container {
  position: relative;
  background-color: #548eb8; /* Fundo azul claro */
  border-radius: 50%; /* Torna o contêiner redondo */
}

.user-profile-text {
  font-size: small;
}

.more-options-btn {
  margin-left: auto;
}

.active-page {
  background-color: #645fc9; /* Fundo roxo */
  color: white; /* Texto branco para contraste */
}

.active-page .list-item-title img {
  filter: brightness(0) invert(1); /* Ajusta a cor da imagem para ficar visível em fundo roxo */
}

.active-page .list-item-title {
  color: white; /* Ícone de seta em branco */
}
.user-profile-subtitle {
  font-size: 7px !important;
}
.user-profile-title {
  font-size: 9px !important;
  font-weight: 600 !important;
}

v-iocon {
  width: 15px;
  height: 15px;
}
</style>
