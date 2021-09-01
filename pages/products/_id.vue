<template>
        <ProductDetails :product="productDetails" />
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: {
          // ...mapGetters({
          //   productDetails: "product/getProductById"
          // })
            productDetails() {
                return this.$store.getters.getItemDetails(this.$route.params.id);
            },
        }
    }
</script>

