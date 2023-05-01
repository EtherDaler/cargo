<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<template>
  <v-container fill-height>
    <!-- First table -->
    <v-row justify-md="center" wrap>
      <v-col class="d-flex justify-center" md12>
        <v-data-table
            :headers="headers"
            :items="cargoesList"
            sort-by="id"
            class="elevation-1 secondary"
            :mobile-breakpoint="0"
            :search="search"
        >
          <template v-slot:top>
            <v-toolbar color="primary" flat>
              <v-toolbar-title>Cargoes</v-toolbar-title>
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

              <CargoCreateVue/>
            </v-toolbar>
          </template>
          <!-- TABLE ACTIONS -->
          <!-- the v-table has slots you can use to change column content. We use this for actions column
          this allows us to pass in the edit and delete icons to the actions column
          we then use the item object passed with scoped slot from v-table(child)-->
          <template v-slot:[`item.name`]="{ item }">
            <router-link :to="'/crud-detail/' + item.slug" class="text-dec-none">
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
import CargoCreateVue from "@/views/DashboardViews/UnderView/CargoCreateVue";
export default {
  components: {CargoCreateVue},
  name: 'CargoesView',
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    cargoesList: [],
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
      { text: "Weight", value: "weight" },
      { text: "Status", value: "status.name" },
      { text: "Felial", value: "felial.name" },
      { text: "Days for delivery", value: "delivery_day", sortable: false },
      { text: "From", value: "recipient_city" },
      { text: "Price", value: "total_price" },
    ],
    editedIndex: -1,
    //this is the new item created by copying the userList item. its used in editing menu and methods
    defaultItem: {
      name: "",
      shipping_date: "",
      shipping_type: "",
      felial: "",
      sender: "",
      recipient: "",
      status: "",
      weight: "",
      weight_type: "",
      delivery_price: "",
      customs_clearance: "",
      extra_expenses: "",
      sender_country: "",
      recipient_country: "",
      sender_city: "",
      recipient_city: "",
      delivery_day: "",
      pay_type: "",
      pay_status: "",
      payment_date: "",
      total_price: "",
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
    this.getcargoes();
  },

  methods: {
    //uses axios to send get request to api in genericAPI
    getcargoes() {
      genericApi
          .get('/cargoes/cargoes/?format=json')
          .then((response) => {
            this.cargoesList = response.data
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
