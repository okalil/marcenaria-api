import { Customer } from '../model/customer';

export class CustomerService {
  async getCustomers({ cpf, city, neighborhood }) {
    const customers = await Customer.find({
      ...(cpf && { cpf }),
      ...(city && { city }),
      ...(neighborhood && { neighborhood }),
    });
    return customers;
  }
  async getCustomer(id: string) {
    const customer = await Customer.findById(id);
    return customer;
  }
  async createCustomer(dto: any) {
    const customer = await Customer.create(dto);
    return customer;
  }
  async updateCustomer(id: string, dto: any) {
    const customer = await Customer.updateOne({ _id: id }, { $set: dto });
    return customer;
  }
  async deleteCustomer(id: string) {
    await Customer.deleteOne({ _id: id });
  }
}
