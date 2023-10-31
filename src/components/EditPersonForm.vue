<template>
    <div>
      <h1>Edit Person</h1>
      <v-form>
        <!-- <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field> -->
        <v-text-field label="Name" @change="saveMe($event, 'name')" v-model="person.name" required></v-text-field>
        <div class="flex-container">
          <v-checkbox class="flex-item" label="Member" @change="saveMe($event, 'member')" v-model="person.member"></v-checkbox>
          <v-checkbox class="flex-item" label="Mentor" @change="saveMe($event, 'mentor')" v-model="person.mentor"></v-checkbox>
          <v-checkbox class="flex-item" label="Donor" @change="saveMe($event, 'donor')" v-model="person.donor"></v-checkbox>
          <v-checkbox class="flex-item" label="Contact" @change="saveMe($event, 'contact')" v-model="person.contact"></v-checkbox>
        </div>
        <v-text-field label="Status" @change="saveMe($event, 'status')" v-model="person.status"></v-text-field>
        <v-text-field label="Notes" @change="saveMe($event, 'description')" v-model="person.description"></v-text-field>
        <v-text-field label="Title" @change="saveMe($event, 'title')" v-model="person.title"></v-text-field>
        <v-text-field label="Email" @change="saveMe($event, 'eMail')" v-model="person.eMail"></v-text-field>
        <v-text-field label="GitHub" @change="saveMe($event, 'gitHub')" v-model="person.gitHub"></v-text-field>
        <v-text-field label="Phone" @change="saveMe($event, 'phone')" v-model="person.phone"></v-text-field>
        <v-text-field label="Device" @change="saveMe($event, 'device')" v-model="person.device"></v-text-field>
        <v-text-field label="Location" @change="saveMe($event, 'location')" v-model="person.location"></v-text-field>
        <v-text-field label="MentorName" @change="saveMe($event, 'mentorName')" v-model="person.mentorName"></v-text-field>
        <v-text-field label="PartnerName" @change="saveMe($event, 'partnerName')" v-model="person.partnerName"></v-text-field>
      </v-form>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['person'])
  },
  mounted() {
    this.$store.dispatch('getPerson', this.$route.params.id);
  },  
  methods: {
    async saveMe(event, fieldName) {
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      
      try {
        await this.$store.dispatch('patchPerson', {
          id: this.$route.params.id,
          fieldName,
          value
        });
      } catch (error) {
        alert(error.message);
        event.target.focus();
      }
    }
  }
};
</script>

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
