<template>
  <div class="product-container">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" @click="insert()">Add New Product</v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="primary" dark>Add New Product</v-toolbar>
          <form>
            <v-text-field v-model="insertItem.id" label="id"></v-text-field>
            <v-text-field v-model="insertItem.Name" label="Name"></v-text-field>
            <v-text-field v-model="insertItem.Description" label="Description"></v-text-field>
            <v-text-field v-model="insertItem.Image" label="Image"></v-text-field>
            <v-text-field v-model="insertItem.Price" label="Price"></v-text-field>
          </form>
          <v-card-actions class="justify-end">
            <v-btn class="mr-4" @click="save(insertItem)"> Save </v-btn>
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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
      insertItem:{
        id: null,
        Name: null,
        Description: null,
        Image: null,
        Price: null
      },
      insertProduct:{
        id: null,
        Name: null,
        Description: null,
        Image: null,
        Price: null

      }
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
      getTotalCartItem: "cart/getCartCount"
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
      addItemAction: "product/addItem",
    }),
    ...mapMutations({
      createMutation:"product/create",
      getMutation:"product/get",
      detailsMutation:"product/details",
      deleteMutation:"product/delete",
      updateMutation:"product/update"
    }),
    insert() {
      
    },
    save(product) {
      this.insertProduct={
        id: product.id,
        Name: product.Name,
        Description: product.Description, 
        Image: product.Image, 
        Price: product.Price, 
      }
      this.addItemAction(this.insertProduct);
    // console.log(this.insertProduct)
    },
  },
  initialize() {
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
        this.getTotalCartItem;

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
