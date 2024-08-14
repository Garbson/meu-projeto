<template>
  <v-container>
    <v-row>
      <v-col class="d-flex align-center">
        <v-icon class="mr-2">fa-solid fa-book</v-icon>
        <span class="title">Pedidos</span>
      </v-col>

      <v-col class="d-flex justify-end align-center">
        <v-btn color="#645fc9" rounded small class="mr-2">
          Total de pedidos / compradores
        </v-btn>
        <v-btn color="white" rounded small> Relatórios & transações </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="rounded-card" width="100%" elevation="0">
          <!-- Header with unit selection -->
          <v-card-title class="pa-2 justify-space-between">
            <v-row class="justify-space-between" align="center">
              <v-col>
                <span class="headline">Selecione uma unidade para análise</span>
              </v-col>
              <v-col class="d-flex justify-end">
                <v-menu offset-y v-model="menu" transition="slide-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="select-btn" v-bind="attrs" v-on="on">
                      Selecione
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="unit in units" :key="unit">
                      <v-list-item-content>{{ unit }}</v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
          </v-card-title>
          <hr />

          <div class="options-container">
            <div class="option-item">
              <v-icon class="mr-2 grey--text">fa-solid fa-school</v-icon>
              <span class="grey--text">Realizar novo pedido para escola</span>
            </div>
            <hr />
            <div class="option-item">
              <v-icon class="mr-2 grey--text">fa-solid fa-user</v-icon>
              <span class="grey--text">Realizar novo pedido para aluno</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      units: ["Unidade 1", "Unidade 2", "Unidade 3"], 
    };
  },
};
</script>

<style scoped>
.subtitle {
  font-size: 12px;
  line-height: 14px;
  padding: 0;
}

.title {
  font-family: Articulat CF, sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.headline {
  font-size: 14px; 
}

.rounded-card {
  border-radius: 20px; 
  padding: 16px;
  border: 1px solid #ffffff;
  width: 100%; /* Garanta que o cartão ocupe 100% da largura do contêiner */
}

.select-btn {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px; 
  color: #000; 
}

.options-container {
  padding: 8px 0;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: #757575;
}

.option-item v-icon {
  font-size: 16px;
  color: #757575; 
}

hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 8px 0;
}

.v-sheet.v-card {
  border-radius: 18px;
}

.col{
  padding:12px 0px !important;
}
</style>
