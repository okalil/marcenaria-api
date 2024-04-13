import type { Request, Response } from 'express';
import { CustomerService } from '../service/customer.service';

export class CustomerController {
  async getCustomers(req: Request, res: Response) {
    const query = req.query;
    const cpf = query.cpf?.toString() || '';
    const city = query.city?.toString() || '';
    const neighborhood = query.neighborhood?.toString() || '';

    const customersService = new CustomerService();
    const customers = await customersService.getCustomers({
      cpf,
      city,
      neighborhood,
    });
    return res.json({ customers });
  }

  async getCustomer(req: Request, res: Response) {
    const params = req.params;
    const customerId = params.id;
    const customersService = new CustomerService();
    const customer = await customersService.getCustomer(customerId);
    return res.json({ customer });
  }

  async createCustomer(req: Request, res: Response) {
    const customersService = new CustomerService();
    const customer = await customersService.createCustomer(req.body);
    return res.json({ customer });
  }

  async updateCustomer(req: Request, res: Response) {
    const customersService = new CustomerService();
    const customer = await customersService.updateCustomer(
      req.params.id,
      req.body
    );
    return res.json({ customer });
  }

  async deleteCustomer(req: Request, res: Response) {
    const customersService = new CustomerService();
    await customersService.deleteCustomer(req.params.id);
    return res.status(204).end();
  }
}
