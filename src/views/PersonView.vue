<template>
  <div class="home">
    <PersonForm :mode="mode"></PersonForm>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonForm from '@/components/PersonForm.vue'

export default {
  components: {
    PersonForm
  },
  props: {
    mode: String,
  },    
}
</script>
