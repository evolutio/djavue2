<template>
  <v-layout justify-left>
    <todo-list />
  </v-layout>
</template>

<script>
import todoList from '~/components/todo-list.vue'

export default {
  layout: 'complex',
  components: {
    todoList
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
