const express = require('express');
const cors = require('./middleware/cors');
const userRoutes = require('./routes/user');
const dbConnection = require('./db/connection');

const app = express();
const port = 3000;

app.use(cors);
app.use(express.json());

// 使用用户路由
app.use('/users', userRoutes);

// 定义一个简单的路由
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 确保数据库连接成功后再启动服务器
dbConnection.on('connected', () => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}); 