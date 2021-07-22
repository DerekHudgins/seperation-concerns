const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  static async createOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );

    const order = await Order.insert(value);

    return order;
  }
  static async getOrders(){
    const orders = Order.fetch();
    return orders;
  }

  static async findById(id) {
    const order = await Order.selectById(id);

    return order;
  }
};
