const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema for item
const ItemSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The item text field is required']
  }
})



//create model for item
const Item = mongoose.model('item', ItemSchema);

// Export the model for the items
module.exports = Item;