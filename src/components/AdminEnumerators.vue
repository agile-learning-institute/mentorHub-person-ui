<template>
  <div>
    <EnumeratorItem :enumerators="config.enums.status" :name="'Status'"/>
    <EnumeratorItem :enumerators="config.enums.device" :name="'Devices'"/>
    <EnumeratorItem :enumerators="config.enums.title" :name="'Titles'"/>
    <EnumeratorItem :enumerators="config.enums.domain" :name="'Domains'"/>
    <EnumeratorItem :enumerators="config.enums.resourceType" :name="'Resource Types'"/>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import EnumeratorItem from './AdminEnumeratorItem.vue';

export default {
  components: {
    EnumeratorItem
  },  
  computed: {
    ...mapState(['config'])
  }
};
</script>
