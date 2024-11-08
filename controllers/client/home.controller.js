const Product = require("../../models/product.model");
const productHelper = require("../../helpers/product");
//[GET] /
module.exports.index = async (req, res) => {
    // Lay ra san pham noi bat
    const productFeatured = await Product.find({
        featured: "1",
        deleted: false,
        status: "active"
    }).limit(4);

    const newProducts = productHelper.priceNewProducts(productFeatured);

    // Lay ra san pham moi nhat
    const productsNew = await Product.find({
        deleted: false,
        status: "active"
    }).sort({ position: "desc"}).limit(14);

    const newProductsNew = productHelper.priceNewProducts(productsNew);
    res.render("client/pages/home/index", {
        pageTitle: "Trang chủ",
        productsFeatured: newProducts,
        productsNew: newProductsNew
    })
};