<template>
  <v-container style="background-color: white" class="pa-6">
    <!-- Botões de Pedidos e Trocas -->
    <v-row class="mb-4">
      <v-col>
        <v-btn
          class="filter-btn"
          color="#ffff"
          elevation="0"
          :class="{ 'active-filter': activeFilter === 'pedidos' }"
          @click="showTable('pedidos')"
        >
          Pedidos
        </v-btn>
        <v-btn
          class="filter-btn"
          color="#ffff"
          elevation="0"
          :class="{ 'active-filter': activeFilter === 'trocas' }"
          @click="showTable('trocas')"
        >
          Trocas
        </v-btn>
        <hr />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="filters-container ">
          <v-row class="d-flex align-center align-center justify-space-between">
            
            <span class="subtitle"><v-icon class="mr-2">fa-solid fa-filter</v-icon>Opção de todos os filtros</span>
            <v-chip class="filter-chip">Códigos</v-chip>
            <v-chip class="filter-chip">Números</v-chip>
            <v-chip class="filter-chip">Data de Criação</v-chip>
            <v-chip class="filter-chip">Autorização</v-chip>

            <v-menu
              offset-y
              v-model="statusMenu"
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="filter-chip"
                  v-bind="attrs"
                  v-on="on"
                  small
                  rounded
                >
                  Informações sobre o status NF
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="status in statuses" :key="status">
                  <v-list-item-content>{{ status }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <!-- Tabela com dados -->
    <v-row>
      <v-col>
        <v-card class="rounded-card" color="#F4F6F8">
          <v-data-table
            :headers="headers"
            :items="items"
            item-key="code"
            :items-per-page="5"
            item-value="code"
          >
            <template v-slot:item="props">
              <tr class="table-linha">
                <td class="table-cell">{{ props.item.code }}</td>
                <td class="table-cell">{{ props.item.number }}</td>
                <td class="table-cell">{{ props.item.creationDate }}</td>
                <td class="table-cell">{{ props.item.unit }}</td>
                <td class="table-cell">{{ props.item.authorization }}</td>
                <td class="table-cell">
                  <span :class="getStatusClass(props.item.status)">
                    {{ props.item.status }}
                  </span>
                </td>
                <td class="table-cell">{{ props.item.nfNumber }}</td> 
                <td class="table-cell">
                  <v-icon @click="viewLog(props.item)">mdi-eye</v-icon>
                </td> 
                <td class="table-cell">
                  <v-icon @click="showDetails(props.item)">mdi-file-pdf-box</v-icon>
                </td> 
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ selectedItem.code }} - Detalhes</span>
        </v-card-title>
        <v-card-text>
          <div>
            <div><strong>Código:</strong> {{ selectedItem.code }}</div>
            <div><strong>Número:</strong> {{ selectedItem.number }}</div>
            <div>
              <strong>Data de Criação:</strong> {{ selectedItem.creationDate }}
            </div>
            <div><strong>Unidade:</strong> {{ selectedItem.unit }}</div>
            <div>
              <strong>Autorização:</strong> {{ selectedItem.authorization }}
            </div>
            <div><strong>Status:</strong> {{ selectedItem.status }}</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'pedidos', // Definindo 'Pedidos' como padrão
      statusMenu: false,
      dialog: false,
      selectedItem: {},
      statuses: [
        "Aguardando nivelamento",
        "Cancelado",
        "Erro",
        "Aguardando pagamento",
        "A atender",
        "Aguardando emissão de NF",
      ],
      headers: [
        { text: "Código", value: "code" },
        { text: "Número", value: "number" },
        { text: "Data de Criação", value: "creationDate" },
        { text: "Unidade", value: "unit" },
        { text: "Autorização", value: "authorization" },
        { text: "Status", value: "status" },
        { text: "NF", value: "nfNumber" },      
        { text: "Log", value: "log" },           
        { text: "Detalhes", value: "details" }, 
      ],
      items: [
        {
          code: "1234",
          number: "5678",
          creationDate: "2024-08-10",
          unit: "KNN Acre",
          authorization: "83932892",
          status: "Aguardando pagamento",
          nfNumber: "001234", // Exemplo de número de NF
        },
        {
          code: "2345",
          number: "6789",
          creationDate: "2024-08-09",
          unit: "KNN Nonoai",
          authorization: "4234732y49",
          status: "Cancelado",
          nfNumber: "001235",
        },
        {
          code: "3456",
          number: "7890",
          creationDate: "2024-08-08",
          unit: "KNN Feijó",
          authorization: "baixa manual",
          status: "Entregue",
          nfNumber: "001236",
        },
        {
          code: "4567",
          number: "8901",
          creationDate: "2024-08-07",
          unit: "KNN Porto",
          authorization: "Não autorizado",
          status: "A atender",
          nfNumber: "001237",
        },
        {
          code: "4567",
          number: "8903",
          creationDate: "2024-08-07",
          unit: "KNN Santa",
          authorization: "3637997832",
          status: 'Recebido pela transportadora',
          nfNumber: "001238",
        },
        // Adicione mais itens conforme necessário
      ],
    };
  },
  methods: {
    showDetails(item) {
      this.selectedItem = item;
      this.dialog = true;
    },
    viewLog(item) {
      // Adicione a lógica para visualizar o log aqui
      alert('Exibindo log para: ' + item.code);
    },
    showTable(type) {
      this.activeFilter = type;
    },
    getStatusClass(status) {
      switch (status) {
        case 'Recebido pela transportadora':
        case 'Entregue':
        case 'Disponível para retirada':
          return 'status-green';
        case 'Aguardando nivelamento':
        case 'A atender':
        case 'Aguardando emissão de NF':
          return 'status-orange';
        case 'Erro':
        case 'Aguardando pagamento':
        case 'Cancelado':
          return 'status-red';
        default:
          return 'status-gray';
      }
    },
  },
};
</script>


<style scoped>
.filters-container {
  padding: 3px;
}

.subtitle {
  font-size: 14px;
  line-height: 16px;
  margin-right: 20px;
}



.filter-btn {
  color: #ffffff;
  margin-right: 8px;
  position: relative;
}

.active-filter::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: #645fc9; /* Cor roxa */
}

.filter-chip {
  margin: 2px;
  font-size: 12px;
  background-color: white;
}

.rounded-card {
  border-radius: 20px !important;
  padding: 10px;
}

.table-cell {
  border-top: 22px solid #f4f6f8;
  border-bottom: 22px solid #f4f6f8;
  padding: 10px !important;
}

.table-linha {
  border-radius: 50% !important;
}

/* Status Classes */
.status-gray {
  border: 1px solid gray;
  border-radius: 8px;
  color: gray;
  padding: 2px 8px;
}

.status-green {
  border: 1px solid green;
  border-radius: 8px;
  color: green;
  padding: 2px 8px;
}

.status-orange {
  border: 1px solid orange;
  border-radius: 8px;
  color: orange;
  padding: 2px 8px;
}

.status-red {
  border: 1px solid red;
  border-radius: 8px;
  color: red;
  padding: 2px 8px;
}
.container {
    max-width: 100%;
    border-radius: 18px;
}
</style>
