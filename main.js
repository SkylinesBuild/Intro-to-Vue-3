const app = Vue.createApp({
    data() {
        return {
            onSales: true,
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariantIndex: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        
        updateSelectedVariantIndex(selectedVariantIndex) {
            this.selectedVariantIndex = selectedVariantIndex
            console.log(this.selectedVariantIndex)            
        }
    },
    computed: {
        currentVariant() {
            return this.variants[this.selectedVariantIndex]
        },
        image(){
            return this.currentVariant.image
        },
        inStock(){
            return this.currentVariant.quantity > 0
        },
        
        title() {
            if (this.onSales) {
                return `${this.brand} ${this.product}`
            }
            return this.product
        }
        
    }
})
