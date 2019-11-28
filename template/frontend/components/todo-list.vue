<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-text-field class="ma-4" v-model="newtask" @keyup.enter="add()" label="Add todo and hit enter" :loading="adding" />
    </v-toolbar>
    <v-progress-linear :indeterminate="true" v-if="loading" />
    <v-list two-line>
      <template v-for="item in items">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <v-list-item-title :class="{done: item.done}">
              {{item.description}}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="item.done" />
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import api from '~api'

export default {
  data () {
    return {
      newtask: '',
      adding: false,
      loading: false,
      items: [
      ]
    }
  },
  mounted () {
    this.loading = true
    api.list_todos().then(response => {
      const todos = response.todos
      this.items = todos
      this.loading = false
    })
  },
  methods: {
    add () {
      this.adding = true
      api.add_todo(this.newtask).then(todo => {
        this.items.push(todo)
        this.newtask = ''
        this.adding = false
      })
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
