<template>
  <div>
    <h1>Admin Dashboard</h1>
    <v-text-field label="UI Version" v-model="config.uiVersion"></v-text-field>
    <v-text-field label="API Version" v-model="config.ApiVersion"></v-text-field>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Config Items</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminConfigItems/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Database Collections</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminCollections/></v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title><h2>Enumerators</h2></v-expansion-panel-title>
        <v-expansion-panel-text><AdminEnumerators/></v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import AdminConfigItems from './AdminConfigItems.vue'
import AdminCollections from './AdminCollections.vue'
import AdminEnumerators from './AdminEnumerators.vue'

export default {
  components: {
    AdminConfigItems,
    AdminCollections,
    AdminEnumerators
  },
  computed: {
    ...mapState(['config'])
  },
  mounted() {
    document.title = 'Configuration';
  },  
};

</script>

<style scoped>

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.flex-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.flex-subitem {
  flex: 1;
  text-align: left;
  width: 33%;
}
</style>
