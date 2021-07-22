const { Router } = require('express');
const Order = require('../models/Order');
const OrderService = require('../services/OrderService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.createOrder(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const order = await OrderService.getOrders()
      res.send(order);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
     const order = await OrderService.findById(req.params.id);
     res.send(order);
   })

  .put('/:id', async (req, res, next) => {
    const id = req.params.id
    const { quantity } = req.body
    try {
      const order = await OrderService.updateOrder(id, quantity);
      res.send(order);
    } catch (error) {
      next(error)
    }
  })

  .delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const deletedOrder = await OrderService.deleteOrder(id);

      res.send(deletedOrder)
    } catch (error) {
      next(error)
    }
  })

  .delete('/:id', async (req, res, next) => {});
