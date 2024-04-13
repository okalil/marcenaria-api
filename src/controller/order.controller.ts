import type { Request, Response } from 'express';
import { OrderService } from '../service/order.service';

export class OrderController {
  async getOrders(req: Request, res: Response) {
    const query = req.query;
    const customer = query.customer?.toString() || '';
    const status = query.status?.toString() || '';
    const from = query.from?.toString() || '';
    const to = query.to?.toString() || '';

    const ordersService = new OrderService();
    const orders = await ordersService.getOrders({
      customer,
      status,
      from,
      to,
    });
    return res.json({ orders });
  }

  async getOrder(req: Request, res: Response) {
    const params = req.params;
    const orderId = params.id;

    const ordersService = new OrderService();
    const order = await ordersService.getOrder(orderId);
    return res.json({ order });
  }

  async createOrder(req: Request, res: Response) {
    const ordersService = new OrderService();
    const order = await ordersService.createOrder(req.body);
    return res.json({ order });
  }

  async updateOrder(req: Request, res: Response) {
    const ordersService = new OrderService();
    const order = await ordersService.updateOrder(req.params.id, req.body);
    return res.json({ order });
  }

  async deleteOrder(req: Request, res: Response) {
    const ordersService = new OrderService();
    await ordersService.deleteOrder(req.params.id);
    return res.status(204).end();
  }
}
