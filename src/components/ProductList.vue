<template>
  <div class="container justify-content-evenly d-flex align-items-stretch flex-wrap">
    <product-card/>
    <product-card/>
    <product-card/>
    <product-card/>
    <product-card/>
    <product-card/>
  </div>
</template>

<script lang="ts">
import ProductDetail from "./ProductDetail.vue";
export default {
  components: {
    ProductDetail
  }
}
</script>

<style>

</style>