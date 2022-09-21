const app = Vue.createApp({
    data() {
        return {
            cart: [],
            review: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
  })
  