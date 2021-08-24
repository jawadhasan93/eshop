export const state = () => ({
  cartList:[]
})


export const getters = {
  getAllCartList: state => {console.log(state.cartList); return state.cartList},
  getCartDetails: state => state.cartDetails,
  getCartCount: state => state.cartList.length
}

export const actions = {

  async addToCart(context, payload) {
    await this.$axios.$post("https://jsonplaceholder.typicode.com/posts")
    .then(res => context.commit('create', res.data))
  },

  async getCartList(context){
    await this.$http.$get("https://jsonplaceholder.typicode.com/posts")
    .then(res=> context.commit('get',res.data))
  },

  async deleteCart(context, id){
    let cartIndex = context.state.cartList.findIndex(x => x.id == cart.id )
    await this.$axios.$get(`"https://jsonplaceholder.typicode.com/posts/${id}"`)
    .then(res => context.commit('delete', { index : cartIndex }))
  },

  // async getCartById(context, id){
  //   await this.$axios.$get(`"https://jsonplaceholder.typicode.com/posts/${id}"`)
  //   .then(res => context.commit('details', res.data))
  // },

  // async updateCart(context, payload){
  //   await this.$axios.$post("https://jsonplaceholder.typicode.com/posts")
  //   .then(res =>{
  //     const resCarrier = res.data
  //     const toUpdate = context.state.cartList.find(x=>x.id == resCarrier.id)
  //     toUpdate = resCarrier
  //     context.commit('update', toUpdate)
  //   })
  // },

}


export const mutations = {
  create(state, payload){ state.cartList.push(payload)},
  get(state, payload){ state.cartList = payload },
  details(state, payload){ state.cartDetails.push(payload) },
  delete(state, id){
    let cartIndex = state.cartList.findIndex(x => x.id == id )
    state.cartList.splice(cartIndex, 1)
  },
  // update(state, payload){ state.cartList.splice(payload.index, 1, payload.data) },
}


// export const mutations = {
//   create(state, payload){ state.cartList.push(payload)},
//   get(state, payload){ state.cartList = payload },
//   details(state, payload){ state.cartDetails.push(payload) },
//   delete(state, payload){state.cartList.splice(payload.index, 1)},
//   // update(state, payload){ state.cartList.splice(payload.index, 1, payload.data) },
// }
