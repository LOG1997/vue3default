const express = require("express");
const router = express.Router();
// 测试文件
const test = require("../test/test");



router.get("/test", test.test);
router.post("/test", test.test);

module.exports = router;    
