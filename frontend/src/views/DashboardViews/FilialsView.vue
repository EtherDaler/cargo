<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<template>
  <v-container fill-height>
    <!-- First table -->
    <v-row justify-md="center" wrap>
      <v-col class="d-flex justify-center" md12>
        <v-data-table
            :headers="headers"
            :items="filialsList"
            sort-by="id"
            class="elevation-1 secondary"
            :mobile-breakpoint="0"
            :search="search"
        >
          <template v-slot:top>
            <v-toolbar color="primary" flat>
              <v-toolbar-title>Filials</v-toolbar-title>
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
              <!-- this dialog section controls the new item button/pop-up functionality v-model controls dialog pop up -->
              <!-- delete dialog menu popup -->
              <!-- this does the same as my delete button below  -->

              <FilialCreateView/>
            </v-toolbar>
          </template>
          <!-- TABLE ACTIONS -->
          <!-- the v-table has slots you can use to change column content. We use this for actions column
          this allows us to pass in the edit and delete icons to the actions column
          we then use the item object passed with scoped slot from v-table(child)-->
          <template v-slot:[`item.name`]="{ item }">
            <router-link :to="'/filial-detail/' + item.id" class="text-dec-none">
              {{ item.name }}
            </router-link>
          </template>
          <template #[`item.id`]="{ item }">
            {{ item.id }}
          </template>
          <template v-slot:no-data>
            <!-- this is the actions reset button that shows when you delete -->
            <v-btn color="primary" @click="getcargoes"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { genericApi } from "../../plugins/axios";
import FilialCreateView from "@/views/DashboardViews/UnderView/FilialCreateView";
export default {
  components: {FilialCreateView},
  name: 'CargoesView',
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    filialsList: [],
    checkboxAdmin: true,
    checkboxActive: false,
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
      { text: "Owner", value: "owner.phone" },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "email" },
      { text: "Country", value: "country"},
      { text: "City", value: "city" },
      { text: "Address", value: "adres" },
    ],
    editedIndex: -1,
    //this is the new item created by copying the userList item. its used in editing menu and methods
    defaultItem: {
      owner: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      adres: "",
      status: "",
      image: "",
      pickup_price: "",
      user_delivery_price: "",
      default_price: "",
      default_tax: "",
      default_safe: "",
      back_deliv_price: "",
    },
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
    this.getfilials();
  },

  methods: {
    //uses axios to send get request to api in genericAPI
    getfilials() {
      genericApi
          .get('/felials/?format=json')
          .then((response) => {
            this.filialsList = response.data
          })
          .catch((error) => console.log(error));
    }
  },
};
</script>

<style>
table.v-table thead tr {
  color: red !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.text-dec-none {
  text-decoration: none
}
</style>
