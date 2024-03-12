<template>
    <div>
      <h1>Edit Person</h1>
      <v-form>
        <!-- <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field> -->
        <v-text-field label="User Name" @change="saveMe($event, 'userName')" v-model="person.userName" required></v-text-field>
        <v-text-field label="First Name" @change="saveMe($event, 'firstName')" v-model="person.firstName" required></v-text-field>
        <v-text-field label="Last Name" @change="saveMe($event, 'lastName')" v-model="person.lastName" required></v-text-field>
        
        <v-select label="Roles" @update:model-value="saveMe($event, 'roles')" v-model="person.roles" :items="people.roles" clearable multiple></v-select>
        <v-select label="Status" @update:model-value="saveMe($event, 'status')" v-model="person.status" :items="people.status" clearable></v-select>
        <v-text-field label="Notes" @change="saveMe($event, 'description')" :rules="[rules.descriptionCount]" v-model="person.description"></v-text-field>
        <v-select label="Title" @update:model-value="saveMe($event, 'title')" v-model="person.title" :items="people.title" clearable></v-select>
        <v-select label="Cadence" @update:model-value="saveMe($event, 'cadence')" v-model="person.cadence" :items="people.cadence" clearable></v-select>
        <v-text-field label="Email" @change="saveMe($event, 'eMail')" :rules="[rules.required, rules.emailCount, rules.emailPattern]" v-model="person.eMail"></v-text-field>
        <v-text-field label="GitHub" @change="saveMe($event, 'gitHub')" :rules="[rules.githubCount]" v-model="person.gitHub"></v-text-field>
        <v-text-field label="Phone" @change="saveMe($event, 'phone')" :rules="[rules.required, rules.phonePattern]" v-model="person.phone"></v-text-field>
        <v-select label="Device" @update:model-value="saveMe($event, 'device')" v-model="person.device" :items="people.device" clearable></v-select>
        <v-text-field label="Location" @change="saveMe($event, 'location')" :rules="[rules.locationCount]" v-model="person.location"></v-text-field>
        <v-select label="MentorName" @update:model-value="saveMe($event, 'mentorId')" v-model="getName.mentorName" :items="config.mentors" item-title="name" item-value="ID" clearable return-object></v-select>
        <v-select label="PartnerName" @update:model-value="saveMe($event, 'partnerId')" v-model="getName.partnerName" :items="config.partners" item-title="name" item-value="ID" clearable return-object></v-select>
      </v-form>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      person: state => state.person,
      config: state => state.config,
    }),
    people() {
      return this.config.enums?.people ? {
        roles: Object.keys(this.config.enums.people.roles),
        status: Object.keys(this.config.enums.people.status),
        title: Object.keys(this.config.enums.people.title),
        cadence: Object.keys(this.config.enums.people.cadence),
        device: Object.keys(this.config.enums.people.device),
      } : {};
    },
    getName() {
      const mentorName = this.config["mentors"] ? this.config["mentors"].filter(mentor => mentor.ID === this.person.mentorId)[0]?.name : "";
      const partnerName = this.config["partners"] ? this.config["partners"].filter(partner => partner.ID === this.person.partnerId)[0]?.name : "";

      return {mentorName, partnerName}
    },
  },
  data() {
    return {
      rules: {
        required: value => !!value || "This is a required field",
        emailPattern: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email",
        phonePattern: value => /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value) || "Invalid phone number",
        nameCount: value => value?.length <= 32 || "Max 32 characters for name field",
        descriptionCount: value => value?.length <= 256 || "Max 256 characters for description field",
        emailCount: value => value?.length <= 256 || "Max 256 characters for email field",
        githubCount: value => value?.length <= 32 || "Max 32 characters for github field",
        locationCount: value => value?.length <= 64 || "Max 64 characters for location field",
      }
    }
  },
  mounted() {
    this.$store.dispatch('getPerson', this.$route.params.id);
  },  
  methods: {
    async saveMe(event, fieldName) {
      const value = typeof event === 'string' || Array.isArray(event) ? event 
        : event.name && event.ID ? event.ID
        : event.target.value;

      try {
        await this.$store.dispatch('patchPerson', {
          id: this.$route.params.id,
          fieldName,
          value
        });
      } catch (error) {
        alert(error.message);
        event.target?.focus();
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
