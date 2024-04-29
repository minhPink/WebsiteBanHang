const ProductCategory = require("../../models/product-category.model");

const configSystem = require("../../config/system");

// [GET] admin/products-category
module.exports.index = async (req, res) => {
    res.render("admin/pages/products-category/index", {
        pageTitle: "Danh muc san pham",
    })
}

// [GET] admin/products-category/create
module.exports.create = async (req, res) => {
    res.render("admin/pages/products-category/create", {
        pageTitle: "Tao moi san pham"
    })
}

// [POST] admin/products-category/create
module.exports.createPost = async (req, res) => {
    if(req.body.position == ""){
        const count = await ProductCategory.countDocuments();
        req.body.position = count + 1;
    } else {
        req.body.position = parseInt(req.body.position);
    }

    const record = new ProductCategory(req.body);
    record.save();
    res.redirect(`${configSystem.prefixAdmin}/products-category`);

}