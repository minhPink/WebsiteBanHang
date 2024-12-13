const Orders = require("../../models/order.model");

// [GET] /admin/orders
module.exports.index = async (req, res) => {
    res.render("admin/pages/orders/index", {
        pageTile: "Đơn hàng"
    })
}