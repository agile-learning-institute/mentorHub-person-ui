<template>
    <div>
      <h1>Add Person</h1>
      <v-form>
        <!-- <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field> -->
        <v-text-field label="Name" v-model="person.name" required></v-text-field>
        <v-btn @click="newPerson">Create New Person</v-btn>
      </v-form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      person: {},
    };
  },
  methods: {
    async newPerson() {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithoutId = `${apiHost}:${apiPort}/api/person/`;

      try {
        const response = await axios.post(apiUrlWithoutId, this.person)
        this.$router.push({ name: 'EditPerson', params: { id: response.data.ID } });
      } catch (error) {
        console.error('An error occurred:', error);
        // TODO: Error Message Dialog 
        // TODO: Set focus back to event.target
      }
    }
  }
};
</script>

