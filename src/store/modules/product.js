const state = {
    product: {}, // This object will store your product data
  };
  
  const mutations = {
    // Define mutations to add, update, and delete products
    setName(state, name) {
      state.name = name;
    },
    setDescription(state, description) {
      state.description = description;
    },
  };
  
  const actions = {
    // Define actions for making API requests and committing mutations

  };
  
  const getters = {
    // Define getters to access product data
    getId: (state) => {
      return state.id;
    },

    getName: (state) => {
      return state.name;
    },

    getDescription: (state) => {
      return state.description;
    },
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  