import { NextFunction, Request, Response } from 'express';

import { OrderService } from '../service/order.service';
import { OrderFilterSchema } from '../model/dto/order-filter';
import { CreateOrderSchema } from '../model/dto/create-order';
import { NotFoundError } from '../error/not-found.error';
import { UpdateOrderSchema } from '../model/dto/update-order';

export class OrderController {
  async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const query = OrderFilterSchema.parse(req.query);

      const ordersService = new OrderService();
      const orders = await ordersService.getOrders(query);
      return res.json({ orders });
    } catch (error) {
      next(error);
    }
  }

  async getOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const ordersService = new OrderService();
      const order = await ordersService.getOrder(req.params.id);
      if (!order) throw new NotFoundError();
      return res.json({ order });
    } catch (error) {
      next(error);
    }
  }

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const body = CreateOrderSchema.parse(req.body);

      const ordersService = new OrderService();
      const order = await ordersService.createOrder(body);
      return res.json({ order });
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const body = UpdateOrderSchema.parse(req.body);

      const ordersService = new OrderService();
      const order = await ordersService.updateOrder(req.params.id, body);
      return res.json({ order });
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const ordersService = new OrderService();
      await ordersService.deleteOrder(req.params.id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
