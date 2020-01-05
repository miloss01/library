<template>
  <v-container fill-height fluid>
  <v-row>
    <v-col align="center">

      <v-card width="400" class="pa-5">
        <v-card-title style="background-color: #b8c9e6" class="mb-5">
          Login
        </v-card-title> 
        <v-form @submit.prevent="login">
          <v-text-field label="Email*" v-model="email"></v-text-field>
          <v-text-field 
            label="Password*"
            required
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            v-model="password">
          </v-text-field>
          <v-card-actions>
            <v-btn type="submit" outlined>
              Login
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text x-small :to="{ name: 'home' }">
              Don't have an account?
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>

    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    show: false
  }),
  methods: {
    login () {
      this.$store.dispatch('login', {email: this.email, password: this.password})
    }
  }
}
</script>