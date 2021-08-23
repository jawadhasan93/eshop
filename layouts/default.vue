<template>
<v-app>
  <v-app-bar app></v-app-bar>

  <v-main>
    <v-container>
      <Nav/>
      <Nuxt/>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
import Products from "../components/Products.vue"
export default {
  data () {
    return {
    }
  },
  components:{Products, Dashboard}
}
</script>
