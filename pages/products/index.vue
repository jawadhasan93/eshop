<template>
  <div class="product-container">
    <Products v-for="item in allItemListGetters" :key="item.id" :product="item" />
  </div>
</template>

<script>
const axios = require("axios");
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props: ["product"],
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      getItemListState: "product/itemList"
    }),
    ...mapGetters({
      getAllProductsGetters: "product/getAllProducts",
      allItemListGetters: "product/allItemList",
      getItemDetailsGetters: "product/getItemDetails",
    })
  },
  methods: {
    ...mapActions({
      addItemAction: "product/addItem",
      getItemListAction: "product/getItemList",
      getItemByIdAction: "product/getItemById",
      UpdateItemAction: "product/updateItem",
      deleteItemAction: "product/deleteItem",
      getProductsAction: "product/getProducts",
    }),
    ...mapMutations({
      createMutation:"product/create",
      getMutation:"product/get",
      detailsMutation:"product/details",
      deleteMutation:"product/delete",
      updateMutation:"product/update"
    })
  },
  initialize() {
      // let url = "http://localhost:4000/products";
      // axios
      //   .get("http://localhost:4000/products")
      //   .then(res => {
      //     // this.vendorUsers = res.data;
      //     console.log("initialize get start")
      //     console.log(res.data)
      //     console.log("initialize get end")
      //   })
      //   .catch(err => {
      //     console.log("Get error")
      //   });
    },
  created() {
      axios
        .get("http://localhost:4000/products")
        .then(res => {
          // this.vendorUsers = res.data;
          console.log("initialize get start")
          console.log(res.data)
          console.log("initialize get end")
        })
        .catch(err => {
          console.log("Get error")
        });
        this.getProductsAction();

  }
};
</script>

<style>
.product-container{
  display: flex;
  width:90%;
  margin:0 auto;
  flex-wrap: wrap;
}

</style>
