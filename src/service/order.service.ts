import { Order } from '../model/order';

export class OrderService {
  async getOrders({ customer, status, from, to }) {
    const orders = await Order.find({
      ...(customer && { customer }),
      ...(status && { status }),
      ...(from && to && { $gte: from, $lte: to }),
    });
    return orders;
  }
  async getOrder(orderId: string) {
    const order = await Order.findById(orderId);
    return order;
  }
  async createOrder(dto: any) {
    const customer = await Order.create(dto);
    return customer;
  }
  async updateOrder(id: string, dto: any) {
    const customer = await Order.updateOne({ _id: id }, { $set: dto });
    return customer;
  }
  async deleteOrder(id: string) {
    await Order.deleteOne({ _id: id });
  }
}
