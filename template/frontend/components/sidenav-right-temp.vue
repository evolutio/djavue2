<template>
  <v-navigation-drawer right temporary v-model="state.right" fixed>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Right temp</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['state']
}
</script>
