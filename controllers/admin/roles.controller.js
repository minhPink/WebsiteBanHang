const Role = require("../../models/role.model.js");

const configSystem = require("../../config/system");

// [GET] admin/roles
module.exports.index = async (req, res) => {
    const find = {
        deleted: false
    }
    const records = await Role.find(find);

    res.render("admin/pages/roles/index", {
        pageTitle: "Nhom quyen",
        records: records
    });
}

// [GET] admin/roles/create
module.exports.createRoles = async (req, res) => {
    res.render("admin/pages/roles/create");
}

// [POST] admin/roles/create
module.exports.createPost = async (req, res) => {
    console.log(req.body);

    const record = new Role(req.body);
    await record.save();

    res.redirect(`${configSystem.prefixAdmin}/roles`);
}