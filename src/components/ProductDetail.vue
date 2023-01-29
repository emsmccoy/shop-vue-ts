<template>
  <div>
    <h1>{{ product.title }}</h1>
    <img v-bind:src="product.image_url" v-bind:alt="product.title" />
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <button @click="previousImage()">Previous</button>
    <button @click="nextImage()">Next</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class ProductDetail extends Vue {
  @Prop() id!: number;
  product: any = {};
  currentImage = 0;

  async mounted() {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${this.id}`
    );
    this.product = response.data;
  }

  previousImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  nextImage() {
    if (this.currentImage < this.product.images.length - 1) {
      this.currentImage++;
    }
  }
}
</script>
