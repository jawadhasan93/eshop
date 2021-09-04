import axios from "axios"
export const state = () => ({
  cartList: []
})


export const getters = {
  getAllCartList: state => state.cartList,
  getTotalBillAmount(state) {
    return state.cartList.map(item => item.totalPrice)
      .reduce((prev, curr) => prev + curr, 0);
  },
  getCartCount: state => state.cartList.length
}

export const actions = {

  async getCarts(context) {
    await axios.get("http://localhost:4000/cart")
      .then(response => {
        console.log(response)
        context.commit('getCartList', response.data)
      })
  },

  async addToCart(context, payload) {
    try {      
      await axios.post("http://localhost:4000/cart", payload).then((res) => {
        console.log('from cart add to cart')
        console.log(res.data)
        context.commit('create', res.data );
      });

    } catch (error) {
      console.log(error.message);
    }
  },

  async getCartList(context) {
    await this.$http.$get("https://jsonplaceholder.typicode.com/posts")
      .then(res => context.commit('get', res.data))
  },

  async deleteCart(context, payload) {
    let itemIndex = context.state.cartList.findIndex(el => {
      return el.id == payload.id;
    });
    await axios.delete(`http://localhost:4000/cart/${id}`)
      .then(res => context.commit('delete', { index: itemIndex}))
  },

}


export const mutations = {
  getCartList(state, payload) { state.cartList = payload },
  create(state, payload) { state.cartList.push(payload) },
  details(state, payload) { state.cartDetails.push(payload) },
  delete(state, payload) {state.cartList.splice(payload.index, 1)},
  // update(state, payload){ state.cartList.splice(payload.index, 1, payload.data) },
}