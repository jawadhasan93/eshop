<template>
<section>

<v-card
    class="mx-auto my-12"
    max-width="374"
    :to="`/products/${product}`"
  >
    <v-img
      height="250"
      :src="`${product.Image}`"
    ></v-img>

    <v-card-title>{{product.Name}}</v-card-title>

    <v-card-text>
      <div>{{product.Description}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Buy now
      </v-btn>
    </v-card-actions>
  </v-card>
</section>
</template>

<script>
export default {
  props:['product']
}
</script>

<style scoped>

</style>
