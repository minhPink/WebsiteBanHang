// const  Order = require("../../models/order.model");


// // [GET] admin/products-category

// module.exports.index = async (req, res) => {
//     let find = {
//         deleted: false
//     };

//     const records = await Order.find(find)

//     for (const record of records) {
//         const role = await Role.findOne({
//             _id: record.role_id,
//             deleted: false
//         });
//         record.role = role;
//     }
//     res.render("admin/pages/accounts/index", {
//         pageTitle: "Danh sách tài khoản",
//         records: records
//     })
// };


