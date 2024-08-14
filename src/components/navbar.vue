<template>
  <div>
    <div app color="#F4F6F8" flat class="styled-nav-bar d-flex flex-row">
      <v-toolbar-title class="nav-title">Olá Roberta 👋🏼</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="nav-buttons">
        <v-btn elevation="0" class="nav-item">Pedidos</v-btn>
        <v-btn elevation="0" class="nav-item">Treinamentos</v-btn>
        <v-btn elevation="0" class="nav-item">Expansão</v-btn>
        <v-btn elevation="0" class="nav-item">Metas</v-btn>
        <v-btn elevation="0" class="nav-item1">+ Criar Atalho</v-btn>
        <v-btn elevation="0" class="nav-item">
          <img src="/img/drive.png" alt="Drive Icon" />
        </v-btn>
        <v-btn text class="nav-item">
          <v-icon left>mdi-email</v-icon>
          Abrir Chamado
        </v-btn>

        <v-btn elevation="0" icon class="nav-icon">
          <img src="/img/email.png" alt="Email Icon" />
        </v-btn>
        <v-btn elevation="0" icon class="nav-icon">
          <img src="/img/sino.png" alt="Bell Icon" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Import Google Font */
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&display=swap");
/* Import Font Awesome for Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.styled-nav-bar {
  font-family: "Roboto", sans-serif; /* Use Roboto font */
  border-bottom: none; /* Remove bottom border */
  box-shadow: none; /* Remove shadow */
  background-color: #f4f6f8 !important;
  height: 64px; /* Ajuste a altura da navbar */
  align-items: center;
}

.nav-title {
  color: #313943;
  font-family: "Fira Sans", sans-serif; /* Atualizado para Fira Sans */
  font-size: 24px; /* Tamanho da fonte especificado */
  font-weight: 600; /* Peso da fonte especificado */
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.nav-item {
  color: #2c3e50;
  margin: 0 4px;
  text-transform: none;
  transition: color 0.3s ease-in-out;
  background-color: #f4f6f8;
  border-radius: 20px;
  border: 1px solid #9e9ea2;
  font-family: "Roboto", sans-serif;
  font-size: 11px !important;
  font-weight: bolder;
  line-height: 14px;
}

.nav-item1 {
  color: #ffffff !important;
  font-weight: bold;
  margin: 0 4px; /* Reduzido o espaço entre itens */
  text-transform: none;
  transition: color 0.3s ease-in-out;
  background-color: #645fc9 !important;
  border-radius: 20px;
  padding: 4px 8px; /* Ajustado para melhor se adequar ao tamanho da navbar */
  font-size: 11px !important;
  border: 1px solid #aaaaac;
}

.nav-item:hover {
  color: #645fc9;
}

.nav-icon {
  color: #2c3e50;
  margin-left: 4px; /* Reduzido o espaço entre ícones */
  border-radius: 50%;
  transition: color 0.3s ease-in-out;
  border: 2px solid #aaaaac;
  font-size: 12px !important; /* Aumentado para uma melhor visibilidade */
}

.nav-icon img {
  width: 12px; /* Ajustado para maior visibilidade */
  height: 12px; /* Ajustado para maior visibilidade */
}

.nav-icon:hover {
  color: #645fc9;
}
</style>
