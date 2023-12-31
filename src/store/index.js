import { createStore } from 'vuex';
import axios from 'axios';
import versionInfo from '@/version.json';  // Import version.json

const store = createStore({
  state: {
    config: {},
    person: {},
    before: {}
  },
  mutations: {
    SET_PERSON(state, payload) {
      state.person = payload;
      state.before = payload;
      document.title = state.person.name;
    },
    SET_CONFIG(state, payload) {
      state.config = payload;
    },
    RESET_PERSON_VALUE(state, fieldName) {
      state.person[fieldName] = state.before[fieldName];
    }
  },
  actions: {
    async initializeStore({ commit }) {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const enumsUrl = `${apiHost}:${apiPort}/api/enums/`;
      const configUrl = `${apiHost}:${apiPort}/api/config/`;
      const partnerUrl = `${apiHost}:${apiPort}/api/partners/`;
      const mentorsUrl = `${apiHost}:${apiPort}/api/mentors/`;
      const parms = {params: {_: new Date().getTime()}} // prevent cache on flat API calls

      try {
        const configResponse = await axios.get(configUrl, parms);
        const enumsResponse = await axios.get(enumsUrl, parms);
        const partnerResponse = await axios.get(partnerUrl, parms);
        const mentorsRepsonse = await axios.get(mentorsUrl, parms);
        configResponse.data.enums = enumsResponse.data[0];
        configResponse.data.partners = partnerResponse.data;
        configResponse.data.mentors = mentorsRepsonse.data

        const patchResponse = await axios.get('/patch.txt', parms);
        const patchValue = patchResponse.data.trim();
        configResponse.data.uiVersion = `${versionInfo.major}.${versionInfo.minor}.${patchValue}`;
        
        commit('SET_CONFIG', configResponse.data);
      } catch(error) {
        console.log("Error:", error);
        console.error('An error occurred:', error);
      }
    },
    async getPerson({ commit }, id) {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithId = `${apiHost}:${apiPort}/api/person/${id}`;
  
      try {
        const response = await axios.get(apiUrlWithId);
        commit('SET_PERSON', response.data);
      } catch (error) {
        console.error('An get error occurred:', error);
      }
    },
    async patchPerson({ commit }, { id, fieldName, value }) {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithId = `${apiHost}:${apiPort}/api/person/${id}`;
      
      const payload = { [fieldName]: value };
      
      try {
        const response = await axios.patch(apiUrlWithId, payload);
        commit('SET_PERSON', response.data);
        return response.data;
      } catch (error) {
        commit('RESET_PERSON_VALUE', fieldName);
        throw new Error("Invalid Value");
      }
    },    
    async postPerson({ state, commit }) {
      const apiHost = process.env.VUE_APP_API_HOST;
      const apiPort = process.env.VUE_APP_API_PORT;
      const apiUrlWithoutId = `${apiHost}:${apiPort}/api/person/`;

      const payload = state.person;
      console.log("payload:", payload);

      try {
        const response = await axios.post(apiUrlWithoutId, payload);
        commit('SET_PERSON', response.data); 
        console.log("response", response.data)
        return response.data;
      } catch (error) {
        throw new Error("Duplicate Name", error)
      }
    }
  }
});

export default store;
