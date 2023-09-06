<template>
    <div>
        <h1>Admin Dashboard</h1>
        <v-text-field label="Database Version" v-model="databaseVersion" required></v-text-field>
        <v-text-field label="API Version" v-model="apiVersion"></v-text-field>
        <v-text-field label="UI Version" v-model="uiVersion"></v-text-field>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
        databaseVersion: '',
        apiVersion: '',
        uiVersion: ''
    };
  },

  methods: {
    getData() {
      // Implement logic to save the product using Vuex actions
    }
  }
};
</script>
