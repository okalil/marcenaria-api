import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  name: { type: String },
  cpf: { type: String, required: true, unique: true },
  nationality: { type: String },
  maritalStatus: { type: String },
  profession: { type: String },
  city: { type: String },
  neighborhood: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: String },
});

export const Customer = mongoose.model('Customer', CustomerSchema);
