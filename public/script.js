new Vue({
    el: '#app', // CSS Selektor String
    data: { // holds global data
        total: 0,
        searchTerm: '',
        items: [],
        cart: []
    },
    methods: {
        addItem(index) {
            var item = this.items[index],
                exist = false;
            this.total += item.price;
            for(var i = 0; i < this.cart.length; i++) {
                if(this.cart[i].id === item.id) {
                    this.cart[i].amount++;
                    exist = true;
                    break;
                }
            }
            if(!exist) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    amount: 1
                });
            }
        },
        increase(cartIndex) {
            var item = this.cart[cartIndex];
            item.amount++;
            this.total += item.price;
        },
        decrease(cartIndex) {
            var item = this.cart[cartIndex];
            item.amount--;
            this.total -= item.price;
            if(item.amount <= 0) {
                this.cart.splice(cartIndex, 1);
            }
        },
        onSubmit(event) {
            axios
                .get('/search/' + this.searchTerm)
                .then((response) => {
                    response.data.map((item) => {
                        item.price = 9.99
                    });
                    this.items = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    filters: {
        currency: function (price) {
            return price.toFixed(2) + '€'
        }
    }
});