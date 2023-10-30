<template>
  <div>
    <h1>Admin Dashboard</h1>
    <v-text-field label="UI Version" v-model="config.uiVersion"></v-text-field>
    <v-text-field label="API Version" v-model="config.ApiVersion"></v-text-field>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Database Collections</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminCollections/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>API Config Items</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminConfigItems/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Enumerators</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminEnumerators/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Partners</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminListNames :enumerators="config.partners"/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Mentors</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminListNames :enumerators="config.mentors"/></v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import AdminConfigItems from './AdminConfigItems.vue'
import AdminCollections from './AdminCollections.vue'
import AdminEnumerators from './AdminEnumerators.vue'
import AdminListNames from './AdminListNames.vue'

export default {
  components: {
    AdminConfigItems,
    AdminCollections,
    AdminEnumerators,
    AdminListNames
  },
  computed: {
    ...mapState(['config'])
  },
  mounted() {
    document.title = 'Configuration';
  },  
};

</script>
