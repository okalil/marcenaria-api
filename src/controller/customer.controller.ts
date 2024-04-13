import type { NextFunction, Request, Response } from 'express';

import { CustomerService } from '../service/customer.service';
import { CustomerFilterSchema } from '../model/dto/customer-filter';
import { CreateCustomerSchema } from '../model/dto/create-customer';
import { UpdateCustomerSchema } from '../model/dto/update-customer';
import { NotFoundError } from '../error/not-found.error';

export class CustomerController {
  async getCustomers(req: Request, res: Response, next: NextFunction) {
    try {
      const query = CustomerFilterSchema.parse(req.query);
      const customersService = new CustomerService();
      const customers = await customersService.getCustomers(query);
      return res.json({ customers });
    } catch (error) {
      next(error);
    }
  }

  async getCustomer(req: Request, res: Response) {
    const customersService = new CustomerService();
    const customer = await customersService.getCustomer(req.params.id);
    if (!customer) throw new NotFoundError();
    return res.json({ customer });
  }

  async createCustomer(req: Request, res: Response) {
    const body = CreateCustomerSchema.parse(req.body);
    const customersService = new CustomerService();
    const customer = await customersService.createCustomer(body);
    return res.json({ customer });
  }

  async updateCustomer(req: Request, res: Response) {
    const body = UpdateCustomerSchema.parse(req.body);
    const customersService = new CustomerService();
    const customer = await customersService.updateCustomer(req.params.id, body);
    return res.json({ customer });
  }

  async deleteCustomer(req: Request, res: Response) {
    const customersService = new CustomerService();
    await customersService.deleteCustomer(req.params.id);
    return res.status(204).end();
  }
}
