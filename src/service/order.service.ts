import { Order } from '../model/order';
import { OrderFilterDto } from '../model/dto/order-filter';
import { CreateOrderDto } from '../model/dto/create-order';
import { UpdateOrderDto } from '../model/dto/update-order';

export class OrderService {
  async getOrders({ customer, status, from, to }: OrderFilterDto) {
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
  async createOrder(dto: CreateOrderDto) {
    const customer = await Order.create(dto);
    return customer;
  }
  async updateOrder(id: string, dto: UpdateOrderDto) {
    const customer = await Order.updateOne({ _id: id }, { $set: dto });
    return customer;
  }
  async deleteOrder(id: string) {
    await Order.deleteOne({ _id: id });
  }
}
