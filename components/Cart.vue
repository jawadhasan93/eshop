<template>
  <div>
    <h5>{{cart.title}}</h5>
    <p>{{cart.snippet}}</p>
    <p>{{cart.Descrition}}</p>
    <button @click="removeFromCart(cart.id)">Remove</button>
     <v-btn to="/products">Back</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
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
