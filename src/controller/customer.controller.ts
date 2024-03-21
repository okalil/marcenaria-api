import type { Request, Response } from 'express';
import { dataSource } from '../model/data-source';
import { Customer } from '../model/entities/customer';

export class CustomerController {
  async getCustomers(req: Request, res: Response) {
    const customersRepository = dataSource.getRepository(Customer);
    const customers = await customersRepository.find();
    return res.json({ customers });
  }

  async createCustomer(req: Request, res: Response) {
    const customersRepository = dataSource.getRepository(Customer);
    await customersRepository.insert(req.body);
    return res.status(200).end();
  }

  async updateCustomer(req: Request, res: Response) {
    const customersRepository = dataSource.getRepository(Customer);
    await customersRepository.update({ id: parseInt(req.params.id) }, req.body);
    return res.status(200).end();
  }

  async deleteCustomer(req: Request, res: Response) {
    const customersRepository = dataSource.getRepository(Customer);
    await customersRepository.delete({ id: parseInt(req.params.id) });
    return res.status(204).end();
  }
}
