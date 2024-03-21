import type { Request, Response } from 'express';
import { dataSource } from '../model/data-source';
import { Product } from '../model/entities/product';

export class ProductController {
  async getProducts(req: Request, res: Response) {
    const productsRepository = dataSource.getRepository(Product);
    const products = await productsRepository.find();
    return res.json({ products });
  }

  async createProduct(req: Request, res: Response) {
    const productsRepository = dataSource.getRepository(Product);
    await productsRepository.insert(req.body);
    return res.status(200).end();
  }

  async updateProduct(req: Request, res: Response) {
    const productsRepository = dataSource.getRepository(Product);
    await productsRepository.update({ id: parseInt(req.params.id) }, req.body);
    return res.status(200).end();
  }

  async deleteProduct(req: Request, res: Response) {
    const productsRepository = dataSource.getRepository(Product);
    await productsRepository.delete({ id: parseInt(req.params.id) });
    return res.status(204).end();
  }
}
