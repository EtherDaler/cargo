<!-- https://vuetifyjs.com/en/api/v-data-table/#api-props  -->
<template>
  <v-container fill-height>
    <!-- First table -->
    <v-row justify-md="center" wrap>
      <v-col class="d-flex justify-center" md12>
        <v-data-table
            :headers="headersCountry"
            :items="countriesList"
            sort-by="id"
            class="elevation-1 secondary"
            :mobile-breakpoint="0"
            :search="search_country"
        >
          <template v-slot:top>
            <v-toolbar color="primary" flat>
              <v-toolbar-title>Countries</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>

              <v-text-field
                  v-model="search_country"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  class="ma-2 px-8"
                  color="secondary"
              ></v-text-field>
              <CountryCreateView :onCreate="updateCountries"/>
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
            <v-btn color="primary" @click="getcountries"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <!-- Second table -->
    <v-row justify-md="center" wrap>
      <v-col class="d-flex justify-center" md12>
        <v-data-table
            :headers="headersCity"
            :items="citiesList"
            sort-by="id"
            class="elevation-1 secondary"
            :mobile-breakpoint="0"
            :search="search_city"
        >
          <template v-slot:top>
            <v-toolbar color="primary" flat>
              <v-toolbar-title>Cities</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>

              <v-text-field
                  v-model="search_city"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  class="ma-2 px-8"
                  color="secondary"
              ></v-text-field>
              <CityCreateView :onCreate="updateCities"/>
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
            <v-btn color="primary" @click="getcities"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { genericApi } from "../../plugins/axios";
import CountryCreateView from "@/views/DashboardViews/UnderView/CountryCreateView";
import CityCreateView from "@/views/DashboardViews/UnderView/CityCreateView";
export default {
  components: {CountryCreateView, CityCreateView},
  name: 'LocationsView',
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    countriesList: [],
    citiesList: [],
    rowsAmount: [
      15,
      20,
      25,
      { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 },
    ],
    dialog: false,
    search_country: "",
    search_city: "",
    headersCountry: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "name" },
      { text: "Initials", value: "initials" },
      { text: "Code", value: "code" },
    ],
    headersCity: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "name" },
      { text: "Country", value: "country" },
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
    this.getcountries();
    this.getcities();
  },

  methods: {
    //uses axios to send get request to api in genericAPI
    getcountries() {
      genericApi
          .get('/locations/countries/?format=json')
          .then((response) => {
            this.countriesList = response.data
          })
          .catch((error) => console.log(error));
    },
    getcities() {
      genericApi
          .get('/locations/cities/?format=json')
          .then((response) => {
            this.citiesList = response.data
          })
          .catch((error) => console.log(error));
    },
    updateCountries(data) {
      this.countriesList.push(data)
    },
    updateCities(data) {
      this.citiesList.push(data)
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
