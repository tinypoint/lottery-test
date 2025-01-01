const express = require('express');
const User = require('../models/user');

const router = express.Router();

// 从数据库中获取用户信息
router.get('/', async (req, res) => {
  try {
    const users = await User.findOne({ name: "帅哥" });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 创建新用户
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body; // 从请求体中获取 name 和 email
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router; 