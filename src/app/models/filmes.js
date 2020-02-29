const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  imdb_id: {
    type:String,
    required:true,
  },

  favorito: {
    type:Boolean, 
    default: false,
  },

  visto: {
    type:Boolean, 
    default: false,
  },

  ver: {
    type:Boolean, 
    default: false,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
    
  CreateAt:{
    type: Date,
    default: Date.now,
  },
});



const Filme = mongoose.model('filmes', UserSchema);

module.exports = Filme;