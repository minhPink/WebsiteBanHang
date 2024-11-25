const express = require("express");
const multer  = require('multer');

const upload = multer();
const router = express.Router();

const controller = require("../../controllers/admin/order.controller");

const validates = require("../../validates/admin/products-categoty.validates");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middlewares");

router.get("/", controller.index);

module.exports = router;