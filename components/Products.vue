<template>
  <section>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>{{ product.Name }}</v-card-title>

      <v-card-text>
        <div>{{ product.Description }}</div>
      </v-card-text>
      <v-card-text>
        <div>{{ product.Price }}</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="buy(product)">
          Buy now
        </v-btn>
        <v-btn color="deep-purple lighten-2" text @click="remove(product)">
          Delete
        </v-btn>
        <v-btn
          color="deep-purple lighten-2"
          text
          :to="`/products/${product.id}`"
        >
          Details
        </v-btn>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on" @click="edit(product)">Edit</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Edit Products</v-toolbar>
              <form>
                <v-text-field
                  v-model="editItem.Name"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="editItem.Price"
                  label="Price"
                ></v-text-field>
              </form>
              <v-card-actions class="justify-end">
                <v-btn class="mr-4" @click="save"> Save </v-btn>
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
const axios = require("axios");
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      cartList: [],
      editItem: {        
        id: null,
        Name: null,
        Description: null,
        Image: null,
        Price: null
      },
    };
  },
  computed:{
    ...mapGetters({
      getTotalCartItem: "cart/getCartCount"
    })
  },
  methods: {
    ...mapActions({
      removeItemAction: "product/removeItem",
      addItemAction: "product/addItem",
      addToCartAction: "cart/addToCart"
    }),
    ...mapMutations({
      addItemToCart: "cart/create"
    }),
    insert() {
      
    },
    buy(product) {
      console.log(product.id)
      this.addToCartAction(product)
    },
    save() {
      console.log()
      // this.addItemAction(product);
    },
    edit(product) {
      this.editItem = product
    },
    remove(product) {
      console.log(product);
      this.removeItemAction(product);
    },
  },
  props: ["product"],
  created(){
    this.getTotalCartItem
  }
};
</script>

<style scoped></style>
