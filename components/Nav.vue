<template>
  <div>
    <Nuxt-link to="/products/cart">nav{{totalCartCount()}}</Nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data(){
      return{
      }
    },
    methods:{
      ...mapGetters({
        totalCartCount:"cart/getCartCount"
      })
    },
    created(){
    // this.cartItems.push(JSON.parse(localStorage.getItem("CartList")))
    }
  }
</script>

<style lang="scss" scoped>

</style>
