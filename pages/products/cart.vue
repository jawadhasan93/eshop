<template>
  <div>
    <Cart v-for="cart in CartList" :key="cart.id" :cart="cart"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    methods:{
      ...mapActions({
        getCartsAction: "cart/getCarts"
      })
    },
    created(){
      this.getCartsAction()
    }
  }
</script>

<style scoped>

</style>
