new Vue({
    el: '#app', // CSS Selektor String
    data: { // holds global data
        total: 0,
        items: [
            {
                title: 'Item 1'
            },
            {
                title: 'Item 2'
            },
            {
                title: 'Item 3'
            }
        ],
        cart: []
    },
    methods: {
        addItem: function(index) {
            // todo: check if item is already on cart
            this.total += 9.99;
            this.cart.push(this.items[index]);
        }
    }
});