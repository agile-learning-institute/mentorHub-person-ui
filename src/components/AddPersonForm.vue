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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['person'])
  },
  mounted() {
    document.title = 'New Person';
  },  
  methods: {
    // ...mapActions(['newPerson']),
    async newPerson() {      
      try {
        const response = await this.$store.dispatch('postPerson');
        console.log("response", response);
        this.$router.push({ name: 'EditPerson', params: { id: response._id } });
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

