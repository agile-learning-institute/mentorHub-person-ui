<template>
    <div>
      <h1>{{ mode }} Person</h1>
      <v-form>
        <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field>
        <v-text-field label="Name" v-model="person.name" required></v-text-field>
        <template v-if="mode==='edit'">
          <v-text-field label="Description" v-model="person.description"></v-text-field>
          <v-text-field label="Status" v-model="person.status"></v-text-field>
          <div class="flex-container">
            <v-checkbox class="flex-item" label="Member" v-model="person.member"></v-checkbox>
            <v-checkbox class="flex-item" label="Mentor" v-model="person.mentor"></v-checkbox>
            <v-checkbox class="flex-item" label="Donor" v-model="person.donor"></v-checkbox>
            <v-checkbox class="flex-item" label="Contact" v-model="person.contact"></v-checkbox>
          </div>
          <v-text-field label="Title" v-model="person.title"></v-text-field>
          <v-text-field label="Email" v-model="person.eMail"></v-text-field>
          <v-text-field label="GitHub" v-model="person.gitHub"></v-text-field>
          <v-text-field label="Phone" v-model="person.phone"></v-text-field>
          <v-text-field label="Device" v-model="person.device"></v-text-field>
          <v-text-field label="Location" v-model="person.location"></v-text-field>
          <v-text-field label="MentorName" v-model="person.mentorName"></v-text-field>
          <v-text-field label="PartnerName" v-model="person.partnerName"></v-text-field>
        </template>
        <v-btn @click="savePerson">Save</v-btn>
      </v-form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      person: {}
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
          this.person = response.data;
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

      if (this.mode === 'edit') {
        axios.patch(apiUrlWithId, this.person)
          .then(response => {
            console.log('Person updated:', response.data);
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      } else {
        axios.post(apiUrlWithoutId, this.person)
          .then(response => {
            this.$router.push({ name: 'EditPerson', params: { id: response.data.ID } });
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      }
    },
  }
};
</script>

<style> 
/* scoped does not work, this makes check boxes visible */
.v-selection-control__input input {
  opacity: 1 !important;
}
</style>

<style scoped>

.flex-container {
  display: flex;
  justify-content: space-between; /* Distributes the items evenly across the container */
  align-items: center; /* Aligns the items vertically in the center */
}

.flex-item {
  flex: 1; /* Each item takes an equal share of the container */
}

</style>
