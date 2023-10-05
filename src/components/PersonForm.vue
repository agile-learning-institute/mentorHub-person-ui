<template>
    <div>
      <h1>{{ mode }} Person</h1>
      <v-form>
        <v-text-field label="Name" v-model="name" required></v-text-field>
        <v-text-field label="Description" v-if="mode==='edit'" v-model="description"></v-text-field>
        <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field>
        <v-btn @click="savePerson">Save</v-btn>
      </v-form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
    };
  },
  props: {
    mode: String,
  },
  mounted() {
    if (this.mode === 'edit') {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithId = `${apiHost}:${apiPort}/api/person/${this.$route.params.id}`;

      axios.get(apiUrlWithId)
        .then(response => {
          this.name = response.data.name;
          this.description = response.data.description;
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    }
  },  
  methods: {
    savePerson() {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithId = `${apiHost}:${apiPort}/api/person/${this.$route.params.id}`;
      const apiUrlWithoutId = `${apiHost}:${apiPort}/api/person/`;

      const payload = {
        name: this.name,
        description: this.description,
      };

      if (this.mode === 'edit') {
        axios.patch(apiUrlWithId, payload)
          .then(response => {
            console.log('Person updated:', response.data);
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      } else {
        axios.post(apiUrlWithoutId, payload)
          .then(response => {
            this.$router.push({ name: 'PersonForm', params: { id: response.data.ID } });
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      }
    },
  }
};
</script>

