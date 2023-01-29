<template>
  <div>
    <form @submit.prevent="searchProduct">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Filter by title"
        :disabled="loading"
      />
      <button type="submit" :disabled="loading">Search</button>
    </form>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @view-details="viewDetails"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import ProductCard from "@/components/ProductDetail.vue";

@Component({
  components: {
    ProductCard,
  },
})
export default class ProductList extends Vue {
  searchTerm = "";
  products: any[] = [];
  loading = false;
  error = "";

  async searchProduct() {
    this.loading = true;
    this.error = "";
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products", {
        params: {
          title: this.searchTerm,
        },
      });
      this.products = response.data;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }

  viewDetails(productId: number) {
    this.$router.push({ name: "product-detail", params: { id: productId } });
  }
}
</script>
