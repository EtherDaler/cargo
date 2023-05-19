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
        <span class="text-h5">Создать посылку</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>

            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="name"
                  label="Название"
                  :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="shipping_date"
                  label="Дата отправки"
                  :rules="[required]"
                  v-mask="'####-##-##'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="shipping_type"
                  @click="getshipmentType"
                  label="Способ отгрузки"
                  :items="shippingTypeList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="felial"
                  @click="getfilials"
                  label="Филиал"
                  :items="filialsList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="sender_phone"
                  label="Телефон отправителя"
                  :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="sender_country"
                  @click="getcountries"
                  label="Страна отправителя"
                  :items="countriesList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="sender_city"
                  @click="getcities(sender_country)"
                  label="Город отправителя"
                  :items="citiesList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="recipient_phone"
                  label="Телефон получателя"
                  :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="recipient_country"
                  @click="getcountries"
                  label="Старана получателя"
                  :items="countriesList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="recipient_city"
                  @click="getcities2(recipient_country)"
                  label="Город получателя"
                  :items="citiesList2"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="status"
                  @click="getstatus"
                  label="Статус"
                  :items="statusList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="weight"
                  label="Вес"
                  :rules="[required, numeric]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="weight_type"
                  label="Единица измерения веса"
                  :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="delivery_day"
                  label="Длительность доставки"
                  :rules="[required, numeric]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="delivery_price"
                  label="Стоимость доставки"
                  :rules="[required, numeric]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="customs_clearance"
                  label="Растаможка"
                  :rules="[required, numeric]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="extra_expenses"
                  label="Дополнительные расходы"
                  :rules="[required, numeric]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="pay_type"
                  @click="getpayType"
                  label="Способ оплаты"
                  :items="payTypeList"
                  :rules="[required]"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="pay_status"
                  @click="getpayStatus"
                  :rules="[required]"
                  label="Статус оплаты"
                  :items="payStatusList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="payment_date"
                  :rules="[required]"
                  label="Дата оплаты"
                  v-mask="'####-##-##'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="accept_type"
                  @click="getacceptType"
                  :rules="[required]"
                  label="Способ получения"
                  :items="acceptTypeList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                  autocomplete="new-password"
                  v-model="work_status"
                  @click="getworkStatus"
                  :rules="[required]"
                  label="Статус в базе"
                  :items="workStatusList"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="total_price"
                  :rules="[required, numeric]"
                  label="Итоговая цена"
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
  name: "CargoCreateVue",
  props: {
    onCreate: Function,
  },
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
    citiesList2: [],
    citiesDict2: [],
    statusList: [],
    statusDict: [],
    workStatusList: [],
    workStatusDict: [],
    acceptTypeList: [],
    acceptTypeDict: [],
    filialsList: [],
    filialsDict: [],
    payTypeList: [],
    payTypeDict: [],
    payStatusList: [],
    payStatusDict: [],
    shippingTypeList: [],
    shippingTypeDict: [],
    rowsAmount: [
      15,
      20,
      25,
      { text: "$vuetify.dataIterator.rowsPerPageAll", value: -1 },
    ],
    dialog: false,
    editedIndex: -1,
    //this is the new item created by copying the userList item. its used in editing menu and methods

    name: "",
    shipping_date: "",
    shipping_type: "",
    felial: "",
    sender_phone: "",
    recipient_phone: "",
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
    work_status: "",
    accept_type: "",


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

    getcities2(country) {
      this.citiesList2 = []
      genericApi
          .get('/locations/cities/?format=json&country='+country)
          .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
              this.citiesDict2[response.data[i].name] = response.data[i].id
              this.citiesList2.push(response.data[i].name)
            }
          })
          .catch((error) => console.log(error));
    },

    getstatus() {
      if (this.statusList.length == 0) {
        genericApi
            .get('/cargoes/status/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.statusDict[response.data[i].name] = response.data[i].id
                this.statusList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getpayType() {
      if (this.payTypeList.length == 0) {
        genericApi
            .get('/cargoes/pay_type/?format=json')
            .then((response) => {
              this.payTypeDict = response.data
              for (let i = 0; i < response.data.length; i++) {
                this.payTypeDict[response.data[i].name] = response.data[i].id
                this.payTypeList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getpayStatus() {
      if (this.payStatusList.length == 0) {
        genericApi
            .get('/cargoes/pay_status/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.payStatusDict[response.data[i].name] = response.data[i].id
                this.payStatusList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getshipmentType() {
      if (this.shippingTypeList.length == 0) {
        genericApi
            .get('/cargoes/shipment/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.shippingTypeDict[response.data[i].name] = response.data[i].id
                this.shippingTypeList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getworkStatus() {
      if (this.workStatusList.length == 0) {
        genericApi
            .get('/cargoes/work_status/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.workStatusDict[response.data[i].name] = response.data[i].id
                this.workStatusList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },

    getacceptType() {
      if (this.acceptTypeList.length == 0) {
        genericApi
            .get('/cargoes/accept_type/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.acceptTypeDict[response.data[i].name] = response.data[i].id
                this.acceptTypeList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },


    getfilials() {
      if (this.filialsList.length == 0) {
        genericApi
            .get('/felials/?format=json')
            .then((response) => {
              for (let i = 0; i < response.data.length; i++) {
                this.filialsDict[response.data[i].name] = response.data[i].id
                this.filialsList.push(response.data[i].name)
              }
            })
            .catch((error) => console.log(error));
      }
    },


    // object.assign fills in the empty object with the properties of item
    editItem(item, dialogbox = true) {
      /* sets the index that controls the title text in the new item pop up
      this updates the editedIndex from being -1 to whatever the index of the table item is that you are editing
      this function is called by the @click edit icons in table actions
      */
      this.editedIndex = this.userList.indexOf(item);
      item.isAdmin = this.checkboxAdmin;
      item.isActive = this.checkboxActive;
      // makes a new object with the same properties as the item object that is able to be accessed easily by methods and others
      this.editedItem = Object.assign({}, item);
      //opens the dialog editing box connected to v-dialog v-model="dialog"
      this.dialog = dialogbox;
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
      this.name = ""
      this.shipping_date = ""
      this.shipping_type = ""
      this.felial = ""
      this.sender_phone = ""
      this.recipient_phone = ""
      this.status = ""
      this.weight = ""
      this.weight_type = ""
      this.delivery_price = ""
      this.customs_clearance = ""
      this.extra_expenses = ""
      this.sender_country = ""
      this.recipient_country = ""
      this.sender_city = ""
      this.recipient_city = ""
      this.delivery_day = ""
      this.pay_type = ""
      this.pay_status = ""
      this.payment_date = ""
      this.total_price = ""
      this.work_status = ""
      this.accept_type = ""
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1; // resets the index that controls the title text in the new item pop up
      }, 300);
    },

    send(data) {
      this.onCreate(data);
    },

    async save() {
      let body = {
        'name': this.name,
        'shipping_date': this.shipping_date,
        'shipping_type': this.shippingTypeDict[this.shipping_type],
        'sender_phone': this.sender_phone,
        'recipient_phone': this.recipient_phone,
        'status': this.statusDict[this.status],
        'weight': this.weight,
        'weight_type': this.weight_type,
        'delivery_price': this.delivery_day,
        'customs_clearance': this.customs_clearance,
        'extra_expenses': this.extra_expenses,
        'sender_country': this.countriesDict[this.sender_country],
        'recipient_country': this.countriesDict[this.recipient_country],
        'sender_city': this.citiesDict[this.sender_city],
        'recipient_city': this.citiesDict2[this.recipient_city],
        'delivery_day': this.delivery_day,
        'pay_type': this.payTypeDict[this.pay_type],
        'pay_status': this.payStatusDict[this.pay_status],
        'payment_date': this.payment_date,
        'total_price': this.total_price,
        'felial': this.filialsDict[this.felial],
        'work_status': this.workStatusDict[this.work_status],
        'accept_type': this.acceptTypeDict[this.accept_type]
      }
      let data = {}
      await genericApi
          .post('cargoes/cargoes/', body, {
            body: body
          })
          .then((response) => {
            data = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      this.send(data)
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