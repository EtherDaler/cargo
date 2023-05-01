<template>
  <v-row justify-md="center" wrap>
    <v-col class="d-flex justify-center" md12>
      <v-data-table
          :headers="headers"
          :items="dataList"
          sort-by="id"
          class="elevation-1 secondary"
          :mobile-breakpoint="0"
          :search="search"
      >
        <template v-slot:top>
          <v-toolbar color="primary" flat>
            <v-toolbar-title>{{ tableName }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>

            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="ma-2 px-8"
                color="secondary"
            ></v-text-field>
            <ConnectedCreateView  :tableName="soloName" :url="url"></ConnectedCreateView>
          </v-toolbar>
        </template>
        <template v-slot:[`item.name`]="{ item }">
          <router-link :to="'/crud-detail/' + item.id" class="text-dec-none">
            {{ item.name }}
          </router-link>
        </template>
        <template #[`item.id`]="{ item }">
          {{ item.id }}
        </template>
        <template v-slot:no-data>
          <!-- this is the actions reset button that shows when you delete -->
          <v-btn color="primary" @click="getdata"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import {genericApi} from "@/plugins/axios";
import ConnectedCreateView from "@/views/DashboardViews/UnderView/ConnectedCreateView"

export default {
  name: "ShipmentTableView",
  props: {
    tableName: String,
    soloName: String,
    url: String
  },
  components: {ConnectedCreateView},
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    dataList: [],
    rowsAmount: [
      15,
      20,
      25,
      { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 },
    ],
    dialog: false,
    search: "",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "name" },
    ],
    editedIndex: -1,
    //this is the new item created by copying the userList item. its used in editing menu and methods
    //second table
    dialogDelete: false,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  // called when page is created before dom to load data from api
  created() {
    this.getdata();
  },

  methods: {
    //uses axios to send get request to api in genericAPI
    getdata() {
      genericApi
          .get('/cargoes/' + this.url + '?format=json')
          .then((response) => {
            this.dataList = response.data
          })
          .catch((error) => console.log(error));
    },
  },
}
</script>

<style scoped>

</style>