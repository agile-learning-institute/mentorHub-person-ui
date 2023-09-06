<template>
  <div class="home">
    <ProductForm :mode="mode"></ProductForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductForm from '@/components/ProductForm.vue'

export default {
  components: {
    ProductForm
  },
  props: {
    mode: String,
  },    
}
</script>
