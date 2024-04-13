import mongoose, { Schema, Types } from 'mongoose';

interface IOrderItem {
  quantity: number;
  product: {
    name: string;
    value: number;
  };
}

interface IOrder{
  date: Date;
  status: string;
  items: IOrderItem[];
  customer: Types.ObjectId;
  total: number;
}

const OrderSchema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, required: true },
  items: [
    {
      quantity: { type: Number, required: true },
      product: {
        name: { type: String, required: true },
        value: { type: Number, required: true },
      },
    },
  ],
  customer: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
});

OrderSchema.virtual('total').get(function (this: IOrder) {
  return this.items.reduce(
    (acc, item) => acc + item.quantity * item.product.value,
    0
  );
});

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
