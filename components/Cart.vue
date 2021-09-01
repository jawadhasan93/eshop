<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{cart.Name}}</v-card-title>

    <v-card-text>
      <div> {{cart.Description}}</div>
      <div> {{cart.Price}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-row
      >
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="removeFromCart(cart.id)"
      >
        Remove
      </v-btn>
            <v-btn
        color="deep-purple lighten-2"
        text
        to="/products"
      >
        Back
      </v-btn>
      </v-row>

    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
  export default {
    props:['cart'],
    computed:{
      ...mapGetters({

      }),
      ...mapState({

      })
    },
    methods:{
      ...mapMutations({
          deleteFromCart:"cart/delete"
      }),

    removeFromCart(id){
        this.deleteFromCart(id)
        // console.log(id)
    }
    },
  }
</script>

<style lang="scss" scoped>

</style>
