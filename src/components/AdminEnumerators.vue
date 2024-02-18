<template>
  <div>
    <ul>
      <v-expansion-panels>
        <div v-for="(properties, collectionName) in config.enums" :key="collectionName" class="wide">
          <template v-if="collectionName !== '_id' && collectionName !== 'name' && collectionName !== 'status'">
            <li class="box">
              <v-expansion-panel>
                <v-expansion-panel-title><h2>{{ collectionName }}</h2></v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul>
                    <v-expansion-panels>
                      <div v-for="(values, propertyName) in properties" :key="propertyName" class="wide">
                        <li class="box">
                          <v-expansion-panel>
                            <v-expansion-panel-title><h3>{{ propertyName }}</h3></v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <ul>
                                <div>
                                  <li v-for="(description, name) in values" :key="name" class="left">
                                    <span class="bold">{{ name }}</span>: {{ description }}
                                  </li>
                                </div>
                              </ul>
                            </v-expansion-panel-text>
                          </v-expansion-panel>
                        </li>
                      </div>
                    </v-expansion-panels>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </li>
          </template>
        </div>
      </v-expansion-panels>
    </ul>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['config'])
  }
};
</script>

<style scoped>

.wide {
  width: 100%;
}

.left {
  text-align: left;
}

.bold {
  font-weight: bold;
}

.box {
  margin: 5px;
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 1px;

}
</style>