import type { NextFunction, Request, Response } from 'express';

import { ProductService } from '../service/product.service';
import { CreateProductSchema } from '../model/dto/create-product';
import { UpdateProductSchema } from '../model/dto/update-product';
import { NotFoundError } from '../error/not-found.error';

export class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const productsService = new ProductService();
      const products = await productsService.getProducts();
      return res.json({ products });
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productsService = new ProductService();
      const product = await productsService.getProduct(req.params.id);
      if (!product) throw new NotFoundError();
      return res.json({ product });
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = CreateProductSchema.parse(req.body);
      const productsService = new ProductService();
      const product = await productsService.createProduct(body);
      return res.json({ product });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = UpdateProductSchema.parse(req.body);
      const productsService = new ProductService();
      const product = await productsService.updateProduct(req.params.id, body);
      return res.json({ product });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productsService = new ProductService();
      await productsService.deleteProduct(req.params.id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
