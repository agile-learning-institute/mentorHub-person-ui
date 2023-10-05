<template>
    <div>
        <h1>Admin Dashboard</h1>
        <v-text-field label="Database Version" v-model="databaseVersion"></v-text-field>
        <v-text-field label="API Version" v-model="apiVersion"></v-text-field>
        <v-text-field label="UI Version" v-model="uiVersion"></v-text-field>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
        databaseVersion: '',
        apiVersion: '',
        uiVersion: ''
    };
  },
  mounted() {
    this.getData();  // Call getData() when the component is mounted
  },
  methods: {
    getData() {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrl = `${apiHost}:${apiPort}/api/config/`;

      axios.get(apiUrl)
        .then(response => {
          console.log("response:", response);
          console.log("response.data.DBVersion:", response.data.DBVersion);
          this.databaseVersion = response.data.DBVersion;
          console.log("this.databaseVersion:", this.databaseVersion);
          this.apiVersion = response.data.Version;
          this.uiVersion = '1.0.0'; // Your UI version
        })
        .catch(error => {
          console.log("Error:", error);
          console.error('An error occurred:', error);
        });
    },
  },
};
</script>
