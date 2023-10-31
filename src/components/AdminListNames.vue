<template>
  <div>
    <div class="listItem" v-for="item in enumerators" :key="item.ID" >
      <p>{{item.name}} : {{ item.ID }}</p>
    </div>
  </div>
</template>
  
<script>
    export default {
        props: ['enumerators']
    };
</script>
  
<style scoped>
.listItem {
  width: 90%;
  text-align: left;
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
