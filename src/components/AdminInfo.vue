<template>
  <div>
    <h1>Admin Dashboard</h1>
    <v-text-field label="Database Version" v-model="databaseVersion"></v-text-field>
    <v-text-field label="API Version" v-model="apiVersion"></v-text-field>
    <v-text-field label="UI Version" v-model="uiVersion"></v-text-field>
    <h2>Configuration Items</h2>
    <ul class="flex-container">
      <li v-for="item in configItems" :key="item.name" class="flex-item">
        <div class="flex-subitem">
          {{ item.name }}
        </div>
        <div class="flex-subitem">
          {{ item.value }}
        </div>
        <div class="flex-subitem">
          From: {{ item.from }}
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import axios from 'axios';
import versionInfo from '@/version.json';  // Import version.json

export default {
  data() {
    return {
        databaseVersion: '',
        apiVersion: '',
        uiVersion: '',
        configItems: []  // New property to hold ConfigItems
    };
  },
  mounted() {
    this.getData();  // Call getData() when the component is mounted
  },
  methods: {
    async getData() {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrl = `${apiHost}:${apiPort}/api/config/`;

      try {
        const parms = {params: {_: new Date().getTime()}}
        const apiResponse = await axios.get(apiUrl, parms);
        this.databaseVersion = apiResponse.data.DBVersion;
        this.apiVersion = apiResponse.data.Version;
        this.configItems = apiResponse.data.ConfigItems
        
        const patchResponse = await axios.get('/patch.txt', parms);
        const patchValue = patchResponse.data.trim();
        this.uiVersion = `${versionInfo.major}.${versionInfo.minor}.${patchValue}`;
      } catch(error) {
        console.log("Error:", error);
        console.error('An error occurred:', error);
      }
    },
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
