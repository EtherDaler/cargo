<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col class="d-flex justify-center">
        <v-card elevation="12" min-width="300" width="500" color="secondary">
          <v-toolbar color="primary">
            <v-toolbar-title>M-Dashboard</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  ref="username"
                  v-model="phone"
                  :rules="[required]"
                  prepend-icon="mdi-account"
                  label="Phone"
                  placeholder="TotallyNotThanos"
                  required
              />
              <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[required, min6]"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="registration"
                  @click:append="showPassword = !showPassword"
              />
              <v-text-field
                  ref="password2"
                  v-model="password2"
                  :rules="[required, min6, matchingPasswords]"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Repeat password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="registration"
                  @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider class="mt-5" />
          <v-card-actions>
            <v-spacer />
            <v-btn align-center justify-center color="tertiary"
                   :disabled="!passMatch || !password || !password2 || !phone ||
                               password.length < 6 || password2.length < 6"
                   @click="register"
            >
              Register
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="snackbar" :color="color" :top="true">
            {{ errorMessages }}
            <v-btn text @click="snackbar = false"> Close </v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {restApi} from '../plugins/axios'

export default {
  name: "RegistrationView",
  data: function () {
    return {
      phone: '',
      password: '',
      password2: '',
      errorMessages: 'Server error',
      snackbar: false, // this is the wrong pass notification
      color: 'warning',
      showPassword: false,
      passMatch: false,
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  //needs to finish implementing using the states in mutations
  methods: {
    required: function(value) {
      if (value) {
        return true;
      } else {
        return 'This field is required.';
      }
    },
    min6: function(value) {
      if (value.length >= 6) {
        return true;
      } else {
        return 'Password should have more than 6 characters.';
      }
    },
    matchingPasswords: function() {
      if (this.password === this.password2) {
        this.passMatch = true
        return true;
      } else {
        this.passMatch = false
        return 'Passwords does not match.';
      }
    },
    register: function () {
      let data = {
        phone: this.phone,
        password: this.password
      }
      restApi.post('/auth/users/', data)
          .then(() => this.$router.push('/login'))
          .catch((err) => {
            console.log(err)
            this.snackbar = true
          })
    },
  },
  metaInfo() {
    return {
      title: 'Super Secret | Registration',
    }
  },
}
</script>

<style scoped>

</style>