import mongoose, { Schema, Types } from 'mongoose';

interface IOrderItem {
  quantity: number;
  product: {
    name: string;
    value: number;
  };
}

interface IOrder {
  date: Date;
  status: string;
  items: IOrderItem[];
  customer: Types.ObjectId;
  total: number;
}

const OrderSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    status: { type: String },
    items: [
      {
        quantity: { type: Number },
        product: {
          name: { type: String },
          value: { type: Number },
        },
      },
    ],
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

OrderSchema.virtual('total').get(function (this: IOrder) {
  return this.items.reduce(
    (acc, item) => acc + item.quantity * item.product.value,
    0
  );
});

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
