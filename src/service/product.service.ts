import { Product } from '../model/product';
import { CreateProductDto } from '../model/dto/create-product';
import { UpdateProductDto } from '../model/dto/update-product';

export class ProductService {
  async getProducts() {
    const products = await Product.find();
    return products;
  }
  async getProduct(id: string) {
    const product = await Product.findById(id);
    return product;
  }
  async createProduct(dto: CreateProductDto) {
    const product = await Product.create(dto);
    return product;
  }
  async updateProduct(id: string, dto: UpdateProductDto) {
    const product = await Product.updateOne({ _id: id }, { $set: dto });
    return product;
  }
  async deleteProduct(id: string) {
    await Product.deleteOne({ _id: id });
  }
}
