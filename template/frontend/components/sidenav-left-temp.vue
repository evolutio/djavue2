<template>
  <v-navigation-drawer temporary v-model="state.left" fixed>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Left temp</v-list-item-title>
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
