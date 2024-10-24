const mongoose = require('mongoose');


const estateSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    location: {
      type: String,

    },
    price: {
        type: String,
    },
    area: {
      type: String,

    },
    date: {
      type: String,

    },
    image: {
      type: String,
    },
    illustrate: {
      type: String,
    },
    types: {
      type: String,

    },
    option: {
      type: String,
    },
    num_bedroom: Number,
    num_wc: Number,
    num_floor: Number,
  },{
    timestamps: true,
  });

  const Estate = mongoose.model('Estate', estateSchema);

  module.exports = Estate;