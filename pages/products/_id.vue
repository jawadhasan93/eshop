<template>
        <ProductDetails :product="productDetails" />
</template>

<script>
    export default {
        computed: {
            productDetails() {
                return this.$store.getters.getProductById(this.$route.params.id);
            },
        }
    }
</script>

