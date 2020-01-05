<template>
  <form @submit.prevent="signup">
    <v-text-field label="First Name*" v-model="firstName"></v-text-field>
    <v-text-field label="Last Name*" v-model="lastName"></v-text-field>
    <v-text-field label="Email*" v-model="email"></v-text-field>
    <v-text-field 
      label="Password*"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      @click:append="show = !show"
      v-model="password">
    </v-text-field>
    <v-btn type="submit" color="green darken-1" text outlined>
      Sign up
    </v-btn>
  </form>
</template>

<script>

export default {
  name: 'Signup',
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      show: false
    }
  },
  methods: {
    signup () {
      const newUser = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      }
      this.$store.dispatch('signup', newUser)
    }
  }
}
</script>

<style>

</style>
