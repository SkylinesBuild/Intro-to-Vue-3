const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },

        removeById(id){
            const idx = this.cart.indexOf(id)
            if (idx >= 0) {
                this.cart.splice(idx, 1)
                return
            }
            console.log(`removeById failed. idx: ${idx}`)
        }
    }
})
