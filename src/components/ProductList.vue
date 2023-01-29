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
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard
  }
}
</script>

<style>

</style>