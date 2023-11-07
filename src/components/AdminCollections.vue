<template>
  <div>    
    <ul class="flex-container">
      <li v-for="item in config.Stores" :key="item.collectionName" class="flex-item">
        <div class="flex-subitem">
          {{ item.collectionName }}
        </div>
        <div class="flex-subitem">
          {{ item.version }}
        </div>
        <div class="flex-subitem">
          {{ item.filter }}
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['config'])
  },
};

</script>

<style scoped>

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.flex-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.flex-subitem {
  flex: 1;
  text-align: left;
  width: 30%;
}
</style>
