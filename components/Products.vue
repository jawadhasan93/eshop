<template>
  <section>
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-title>{{ product.Name }}</v-card-title>

      <v-card-text>
        <div>{{ product.Description }}</div>
      </v-card-text>
      <v-card-text>
        <div>{{ product.title }}</div>
      </v-card-text>
      <v-card-text>
        <div>{{ product.body }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="add(product)">
          Buy now
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
            <v-btn color="primary" v-on="on" @click="edit()">Edit</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Edit Products</v-toolbar>
              <form>
                <v-text-field
                  v-model="editItem.title"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="editItem.body"
                  label="Name"
                ></v-text-field>
                <!-- <v-text-field
                  v-model="editItem.Name"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="editItem.Description"
                  label="Description"
                ></v-text-field>
                <v-text-field
                  v-model="editItem.Price"
                  label="Price"
                ></v-text-field> -->
              </form>
              <v-card-actions class="justify-end">
                <v-btn class="mr-4" @click="save(product)">
                  Save
                </v-btn>
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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      cartList: [],
      editItem: {
      title: null,
      body: null
    },
    };
  },
  props: ["product"],
  computed: {
    products(){
      this.$store.state.itemList
    },
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

    }),
    ...mapMutations({
      createCartMutation: "cart/create",
      createMutation:"product/create",
      getMutation:"product/get",
      detailsMutation:"product/details",
      deleteMutation:"product/delete",
      updateMutation:"product/update"
    }),
    add(p) {
      this.createCart(p);
      console.log(p);
    },
    save(product){
      let payload = this.editItem;
      console.log(this.payload)
      let url = "https://jsonplaceholder.typicode.com/posts/1";
      // let payload = this.editItem;
      axios
        .put(url, payload)
        .then(res => {
          if (res.success) {
            /*Pushing the new item in the local array */
            // this.vendorUsers.push(res.data);
            console.log("this message is from put")
            this.close();
          }
        })
        .catch(err => {
          console.log("update error")
          //   console.log(err);
        });
    },
    clear(){

    },
    edit(){
      // this.editItem = product
      // console.log(this.editItem)
    }
  },

};
</script>

<style scoped></style>
