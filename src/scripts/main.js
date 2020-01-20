const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        return this.orders.push(meal);
    },
    getOrder: function() {
        return this.orders;
    }
};

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "regular"
};

restaurant.placeOrder(chickenComboMeal);
console.table(restaurant.orders);
