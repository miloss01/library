<template>
  <form @submit.prevent="signup">
    <v-text-field label="As name*" v-model="asName"></v-text-field>
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
  name: 'As',
  data () {
    return {
      asName: null,
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
        asName: this.asName
      }
      this.$store.dispatch('signup', newUser)
    }
  }
}
</script>

<style>

</style>
