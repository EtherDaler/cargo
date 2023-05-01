<template>

  <v-dialog v-model="dialog" max-width="500px">

    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="yellow"
          dark
          class="mb-2"
          v-bind="attrs"
          v-on="on"
      >
        New Item
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <!-- changes title based on formTitle index, -1 shows 'New item' any other index shows 'Edit Item' as the title -->
        <span class="text-h5">Create Filial</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="owner"
                  :rules="[required]"
                  @click="getusers"
                  label="Shipping Type"
                  :items="userList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="name"
                  :rules="[required]"
                  label="Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="email"
                  :rules="[required]"
                  label="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="phone"
                  :rules="[required]"
                  label="Phone"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="country"
                  :rules="[required]"
                  @click="getcountries"
                  label="Country"
                  :items="countriesList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="city"
                  :rules="[required]"
                  @click="getcities(country)"
                  label="City"
                  :items="citiesList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="adres"
                  :rules="[required]"
                  label="Address"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-checkbox
                  v-model="status"
                  label="Status"
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="pickup_price"
                  :rules="[required, numeric]"
                  label="Pickup price"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="user_delivery_price"
                  :rules="[required, numeric]"
                  label="User Delivery Price"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="default_price"
                  :rules="[required, numeric]"
                  label="Default price"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="default_tax"
                  :rules="[required, numeric]"
                  label="Default tax"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="default_safe"
                  :rules="[required, numeric]"
                  label="Default Safe"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="back_deliv_price"
                  :rules="[required, numeric]"
                  label="Back delivery price"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <!--  save and cancel buttons for the new/edit dialog pop up-->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
import {genericApi} from "@/plugins/axios";

export default {
  name: "FilialCreateView",
  data: () => ({
    snack: false,
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    userList: [],
    userDict: [],
    countriesList: [],
    countriesDict: [],
    citiesList: [],
    citiesDict: [],
    editedIndex: -1,
    dialog: false,

    owner: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    adres: "",
    status: "",
    pickup_price: "",
    user_delivery_price: "",
    default_price: "",
    default_tax: "",
    default_safe: "",
    back_deliv_price: "",

    //second table
    dialogDelete: false,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    //when dialog is updated this watcher returns the updated value only if the value is truthy, else it calls this.close() method
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    //once the table list is loaded, load the headers
    userList() {
      this.getHeaders();
    },
  },
  // called when page is created before dom to load data from api

  methods: {
    getusers() {
      if (this.userList.length == 0) {
        genericApi
            .get('auth/users/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.userDict[response.data[i].phone] = response.data[i].id
                this.userList.push(response.data[i].phone)
              }
            })
            .catch((error) => console.log(error))
      }
    },

    getcountries() {
      if (this.countriesList.length == 0) {
        genericApi
            .get('/locations/countries/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.countriesDict[response.data[i].name] = response.data[i].id
                this.countriesList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getcities(country) {
      this.citiesList = []
      genericApi
          .get('/locations/cities/?format=json&country='+country)
          .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
              this.citiesDict[response.data[i].name] = response.data[i].id
              this.citiesList.push(response.data[i].name)
            }
          })
          .catch((error) => console.log(error));
    },

    callTableAction(item, endpoint, method) {
      const index = this.userList.indexOf(item);
      let tableItem = this.editedItem;
      this.$store
          .dispatch("updateTableItem", { endpoint, tableItem, method })
          .then(() => {
            this.userList.splice(index, 1); //remove/delete the item from the array the table is using
            this.saveInline(); //calls snackbar noticiation
          })
          .catch((error) => {
            console.log(error);
            this.cancelInline; //calls snackbar noticiation
          });
    },
    // this sets the item, url path endpoint and the type of api method(delete) for calltableAction
    deleteItem(item) {
      //this causes config dialog with 'ok'/'cancel' and if ok is hit this runs
      if (confirm("Are you sure you want to delete this item?")) {
        this.editedItem = Object.assign({}, item);
        let endpoint = `users/delete/${this.editedItem.username}`;
        let method = "delete";
        // calls callTableActions which is a method above that handles calling axios via vuex actions
        this.callTableAction(item, endpoint, method);
      }
    },
    // closes the dialog pop up and resets index until its opened again
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1; // resets the index that controls the title text in the new item pop up
      }, 300);
    },

    save() {
      //if editedIndex is greater than -1 then the item we are trying to save is an already exisiting item, so we update the table differently
      //when you open the editItem menu it sets the index to the items index, which then is used here to determine what to do
      let body = {
        'owner': this.userDict[this.owner],
        'name': this.name,
        'email': this.email,
        'phone': this.phone,
        'country': this.countriesDict[this.country],
        'city': this.citiesDict[this.city],
        'adres': this.adres,
        'status': this.status,
        'pickup_price': this.pickup_price,
        'user_delivery_price': this.user_delivery_price,
        'default_price': this.default_price,
        'default_tax': this.default_tax,
        'default_safe': this.default_safe,
        'back_deliv_price': this.back_deliv_price,
      }
      genericApi
          .post('felials/', body, {
            body: body
          })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      this.close();
    },

    // toasts/snackbar/pop-up messages when you pressactions
    saveInline() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancelInline() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    reset() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data reset to default";
    },
    openInline() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    closeInline() {
      console.log("Dialog closed");
    },

    required: function(value) {
      if (value) {
        return true;
      } else {
        return 'This field is required.';
      }
    },
    isNumber(value) {
      if (typeof value === "string") {
        return !isNaN(value);
      }
    },
    numeric: function (value) {
      if (this.isNumber(value) || typeof value === "number") {
        return true;
      } else {
        return "This field must be numeric"
      }
    }
  },
};
</script>

<style scoped>

</style>