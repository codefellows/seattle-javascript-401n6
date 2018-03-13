const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orm');

let itemSchema = new mongoose.Schema({
  name: String,
  cost: Number,
});

let cartSchema = new mongoose.Schema({
  items: [itemSchema]
});

cartSchema.methods.total = function() {
  let total = 0;
  this.items.forEach(item => {
    total += item.cost;
  });
  return total;
}

let Item = mongoose.model('Item', itemSchema);
let Cart = mongoose.model('Cart', cartSchema);

let coke = new Item({name: 'Coke', cost: 199});
let noodles = new Item({name: 'Noodles', cost: 500});
let beef = new Item({name: 'Brocolli and Beef', cost: 700});

Promise.all([
  coke.save(),
  noodles.save(),
  beef.save(),
])
.then(items => {
  let cart = new Cart({items: items});
  return cart.save()
})
.then(savedCart => {
  console.log("Cart:", savedCart);
  console.log("Total cost:", savedCart.total());
})
.then(() => {
  mongoose.disconnect();
})
.catch((err) => {
  console.log('Error', err);
  mongoose.disconnect();
});


