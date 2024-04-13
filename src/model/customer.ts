import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  name: { type: String, required: false },
  nationality: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  profession: { type: String, required: false },
  cpf: { type: String, required: true, unique: true },
  city: { type: String, required: false },
  neighborhood: { type: String, required: false },
  address: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: false },
});

export const Customer = mongoose.model('Customer', CustomerSchema);
