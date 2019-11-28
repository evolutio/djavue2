<template>
  <v-navigation-drawer fixed v-model="state.drawerRight" right clipped app>
    <v-list dense>
      <v-list-item @click.stop="state.right = !state.right">
        <v-list-item-action>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Open Temporary Drawer</v-list-item-title>
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
