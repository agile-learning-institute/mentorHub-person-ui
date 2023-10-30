<!-- FlexContainer.vue -->
<template>
    <div class="flex-container">
      <div class="flex-item">
        <p>Valid {{name}}</p>
      </div>
      <div class="flex-item">
        <ul>
            <li v-for="value in enumerators" :key="value">
                {{ value }}
            </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
    export default {
        props: ['name', 'enumerators']
    };
</script>
  
<style scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 7px;
  }
.flex-item {
  flex: 1;
  text-align: left;
  width: 45%;
  padding: 5px;
  margin: 5px;
}

</style>
  