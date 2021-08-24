<template>
<section>

<v-card
    class="mx-auto my-12"
    max-width="374"

  >

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
        @click="add(product)"
      >
        Buy now
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text
        :to="`/products/${product.id}`"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</section>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props:['product'],
   methods:{
          ...mapMutations({
            create:"cart/create"
          }),
          add(p){
            this.create(p)
          },
        },
}
</script>

<style scoped>

</style>
