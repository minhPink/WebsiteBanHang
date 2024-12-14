const Product = require("../../models/product.model");
const Orders = require("../../models/order.model");
const totalPriceHelper = require("../../helpers/totalPrice");

// [GET] /admin/orders
module.exports.index = async (req, res) => {
    const orders = await Orders.find({});
    
    if (orders) {
        for(const order of orders) {
            await totalPriceHelper(order);
            order.totalPrice = order.products.reduce((sum, item) => sum + item.totalPrice, 0);
        }
    }
    res.render("admin/pages/orders/index", {
        pageTile: "Đơn hàng",
        orders: orders,
    })
}