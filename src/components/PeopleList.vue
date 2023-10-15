<template>
  <div>
    <h1>
      <a :href="newPersonLink()" target="_blank">Add New Person</a>
    </h1>
    <ul>
      <li v-for="name in people" :key="name.ID" >
        <div class="listItem">
          <a :href="editPersonLink(name.ID)" target="_blank">{{name.name}}</a>  
        </div>
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
        // create parameter to prevent cache on flat API calls
        const parms = {params: {_: new Date().getTime()}}
        const apiResponse = await axios.get(apiUrl, parms);
        this.people = apiResponse.data        
      } catch(error) {
        console.log("Error:", error);
        console.error('An error occurred:', error);
      }
    },
    newPersonLink() {
      return this.$router.resolve({ name: 'AddPerson'}).href;
    },
    editPersonLink(id) {
      // Generate the link for EditPerson route
      return this.$router.resolve({ name: 'EditPerson', params: { id: id } }).href;
    },
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
