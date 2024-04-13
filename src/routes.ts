import { Router } from 'express';
import { CustomerController } from './controller/customer.controller';
import { OrderController } from './controller/order.controller';

const router = Router();

const customersController = new CustomerController();
const ordersController = new OrderController();

router.get('/customers', customersController.getCustomers);
router.get('/customers/:id', customersController.getCustomer);
router.post('/customers', customersController.createCustomer);
router.put('/customers/:id', customersController.updateCustomer);
router.delete('/customers/:id', customersController.deleteCustomer);

router.get('/orders', ordersController.getOrders);
router.get('/orders/:id', ordersController.getOrder);
router.post('/orders', ordersController.createOrder);
router.put('/orders/:id', ordersController.updateOrder);
router.delete('/orders/:id', ordersController.deleteOrder);

export { router };
