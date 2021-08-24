<template>
  <div>
    <Cart v-for="cart in CartList" :key="cart.id" :cart="cart"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapGetters({
        CartList:"cart/getAllCartList"
      })
    },
    created(){
      // this.CartList
    }
  }
</script>

<style scoped>

</style>
