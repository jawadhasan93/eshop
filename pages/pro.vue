<template>
  <div>
    <Pro v-for="item in getAllProducts"
    :key="item.id"
    :product = item
    />
  </div>
</template>

<script>
import { mapGetters} from "vuex"
  export default {
    data(){
      return {
      }
    },
    computed:{
      ...mapGetters({
        getAllProducts: "getAllProduct",
      })
    }
  }
</script>
