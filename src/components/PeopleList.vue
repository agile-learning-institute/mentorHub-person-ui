<template>
  <div>
    <h1>People</h1>
    <ul>
      <li v-for="name in people" :key="name.ID" >
        <v-btn class="listItem" @click="edit(name.ID)">{{name.name}}</v-btn>
      </li>
    </ul>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
        people: []
    };
  },
  mounted() {
    this.getData();  // Call getData() when the component is mounted
  },
  methods: {
    async getData() {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrl = `${apiHost}:${apiPort}/api/person/`;

      try {
        const apiResponse = await axios.get(apiUrl);
        this.people = apiResponse.data        
      } catch(error) {
        console.log("Error:", error);
        console.error('An error occurred:', error);
      }
    },
    edit(id) {
      this.$router.push({ name: 'EditPerson', params: { id: id } });
    }
  },
};

</script>

<style scoped>

.listItem {
  width: 100%;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
