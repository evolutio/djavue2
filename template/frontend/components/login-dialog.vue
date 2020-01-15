<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card>
      <v-card-title>Log in</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-text-field label="Username" required v-model="username" />
          <v-text-field label="Password" type="password" required v-model="password" @keyup.enter="login()" />
          <small style="color: red;" v-if="error">Wrong user or password</small>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="blue--text darken-1" text @click="close()">Cancel</v-btn>
        <v-btn class="blue--text darken-1" text @click="login()" :loading="loading" :disabled="loading">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import api from '~api'

export default {
  data () {
    return {
      visible: false,
      loading: false,
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    close () {
      this.visible = false
    },
    async login () {
      this.loading = true
      this.error = false
      const user = await api.login(this.username, this.password)
      if (user) {
        this.$store.commit('auth/setCurrentUser', user)
        this.visible = false
      } else {
        this.error = true
      }
      this.loading = false
    }
  }
}
</script>
