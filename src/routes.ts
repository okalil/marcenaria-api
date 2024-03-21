import { Router } from 'express';
import { UsersController } from './controller/user.controller';
import { CustomerController } from './controller/customer.controller';
import { ProductController } from './controller/product.controller';

const router = Router();

const usersController = new UsersController();
const customersController = new CustomerController();
const productsController = new ProductController();

router.get('/users', usersController.getUsers);

router.get('/customers', customersController.getCustomers);
router.post('/customers', customersController.createCustomer);
router.put('/customers/:id', customersController.updateCustomer);
router.delete('/customers/:id', customersController.deleteCustomer);

router.get('/products', productsController.getProducts);
router.post('/products', productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

export { router };
