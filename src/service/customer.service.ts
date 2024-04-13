import { Customer } from '../model/customer';
import { CustomerFilterDto } from '../model/dto/customer-filter';
import { CreateCustomerDto } from '../model/dto/create-customer';
import { UpdateCustomerDto } from '../model/dto/update-customer';

export class CustomerService {
  async getCustomers({ cpf, city, neighborhood }: CustomerFilterDto) {
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
  async createCustomer(dto: CreateCustomerDto) {
    const customer = await Customer.create(dto);
    return customer;
  }
  async updateCustomer(id: string, dto: UpdateCustomerDto) {
    const customer = await Customer.updateOne({ _id: id }, { $set: dto });
    return customer;
  }
  async deleteCustomer(id: string) {
    await Customer.deleteOne({ _id: id });
  }
}
