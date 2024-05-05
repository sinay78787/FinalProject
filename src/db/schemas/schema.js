import { Schema } from 'mongoose';

export const LieuSchema = new Schema({
  type_lieu: {
    type: String,
    required: true
  },
  nom_lieu: {
    type: String,
    default: ""
  },
  adresse: {
    type: String,
    default: ""
  },
  ville: {
    type: String,
    default: ""
  },
  code_postal: {
    type: String,
    default: ""
  },
  pays: {
    type: String,
    default: ""
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 1
  },
  artMovement: {
    type: String,
    default: ""
  },
  artType: {
    type: String,
    default: ""
  },
  starRating: {
    type: Number,
    default: 1
  },
  barType: {
    type: String,
    default: ""
  },
  parkType: {
    type: String,
    default: ""
  },
  parkAccessType: {
    type: String,
    default: ""
  }
});
