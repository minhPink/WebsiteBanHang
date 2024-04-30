const ProductCategory = require("../../models/product-category.model");

const configSystem = require("../../config/system");

const createTreeHelper = require("../../helpers/createTree");

// [GET] admin/products-category
module.exports.index = async (req, res) => {
    let find = {
        deleted: false
    }

    const records = await ProductCategory.find(find);

    const newRecords = createTreeHelper.tree(records);

    res.render("admin/pages/products-category/index", {
        pageTitle: "Danh muc san pham",
        records: newRecords
    })
}

// [GET] admin/products-category/create
module.exports.create = async (req, res) => {
    let find = {
        deleted: false
    }
    
    const records = await ProductCategory.find(find);

    const newRecords = createTreeHelper.tree(records);

    
    res.render("admin/pages/products-category/create", {
        pageTitle: "Tao moi san pham",
        records: newRecords
    })
}

// [POST] admin/products-category/create
module.exports.createPost = async (req, res) => {
    try {
        if(req.body.position == ""){
            const count = await ProductCategory.countDocuments();
            req.body.position = count + 1;
        } else {
            req.body.position = parseInt(req.body.position);
        }
    
        const record = new ProductCategory(req.body);
        record.save();
        res.redirect(`${configSystem.prefixAdmin}/products-category`);
    } catch (error) {
        res.redirect(`${configSystem.prefixAdmin}/products-category`);
    }
}