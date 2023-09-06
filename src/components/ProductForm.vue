<template>
    <div>
      <h1>Product - Mode  {{ mode }} </h1>
      <v-form>
        <v-text-field label="Product Name" v-model="name" required></v-text-field>
        <v-text-field label="Description" v-model="description"></v-text-field>
        <p>ID is {{ $route.params.id }}</p>
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
