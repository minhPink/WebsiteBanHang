const Product = require("../../models/product.model");
// [GET] products
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    }).sort({ position: "desc"});

    const newProducts = products.map(item => {
        item.newPrice = Math.floor(item.price * (100 - item.discountPercentage) / 100);
        return item;
    })

    console.log(newProducts);
    

    res.render("client/pages/product/index", {
        pageTitle: "Trang danh sach san pham",
        products: newProducts
    });
};

// [GET] products/detail/:slug
module.exports.detailProduct = async (req, res ) => {
    try {
        const slug = req.params.slug;
        const product = await Product.findOne( { slug : slug} );
        console.log(product);
        res.render("client/pages/product/detail", {
            pageTitle: product.title,
            product: product
        })
    } catch (error) {
        
    }
}