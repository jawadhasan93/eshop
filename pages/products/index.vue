<template>
  <div>
    <Products v-for="item in getAllProductsGetters"
    :key="item.id"
    :product = item
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations} from "vuex"
  export default {
    props:['product'],
    data(){
      return {
      }
    },
    computed:{
      // ...mapGetters({
      //   getAllProductsGetters: "product/getAllProducts",
      // })
      ...mapGetters({
        getAllProductsGetters: "getAllProducts",
      })
    },
    created(){
      // this.getItemList().then(res=>console.log(res))
    },
    methods:{
      ...mapActions({
        getAllProductAction:"getItemList"
      })
    }
  }
</script>
