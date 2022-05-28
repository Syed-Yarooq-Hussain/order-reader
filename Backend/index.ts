import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getAllUsers, getUserById, login } from './src/controller/userController'
import { getAllOrders, getOrderById } from './src/controller/orderController'
import { authenticateToken } from './src/middleware/auth'

import config from 'config';

const app: Express = express();
const port = config.get('app.port') || 3000;

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User Route
app.get('/users', getAllUsers);
app.get('/user/:id', getUserById);
app.post('/login', login)
//Order Route
app.get('/orders', authenticateToken, getAllOrders);
app.get('/order/:id', authenticateToken, getOrderById);

app.listen(port, () => console.log(`Congratz server is running on port :: ${port}!`))
