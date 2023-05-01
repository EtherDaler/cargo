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
        <span class="text-h5">Add {{ tableName }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                  v-model="name"
                  :rules="[required]"
                  label="Name"
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
  name: "ConnectedCreateView",
  props: {
    tableName: String,
    url: String,
  },
  data: () => ({
    snack: false,
    max25chars: (v) => v.length <= 25 || "Input too long!",
    pagination: {},
    editedIndex: -1,
    dialog: false,

    name: "",
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
      let body = {
        'name': this.name,
      }
      genericApi
          .post('cargoes/' + this.url, body, {
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
  },
};
</script>

<style scoped>

</style>