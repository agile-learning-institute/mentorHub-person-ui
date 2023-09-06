<template>
    <div>
      <h1>{{ mode }} Product</h1>
      <v-form>
        <v-text-field label="Product Name" v-model="name" required></v-text-field>
        <v-text-field label="Description" v-if="mode==='edit'" v-model="description"></v-text-field>
        <v-text-field label="ID" v-if="mode==='edit'" v-bind:model-value="$route.params.id" v-bind:readonly="true"></v-text-field>
        <v-btn @click="saveProduct">Save</v-btn>
      </v-form>
    </div>
</template>
  
<script>
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
  methods: {
    saveProduct() {
      // Implement logic to save the product using Vuex actions
    },
  },
};
</script>

