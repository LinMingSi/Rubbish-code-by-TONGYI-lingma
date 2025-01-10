const express = require('express');
const router = express.Router();
const excuseController = require('../controllers/excuseController');

// 获取所有借口
router.get('/excuses', excuseController.getAllExcuses);

// 创建一个新的借口
router.post('/excuses', excuseController.createExcuse);

// 根据ID获取借口
router.get('/excuses/:id', excuseController.getExcuseById);

// 更新借口
router.put('/excuses/:id', excuseController.updateExcuse);

// 删除借口
router.delete('/excuses/:id', excuseController.deleteExcuse);

module.exports = router;