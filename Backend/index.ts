import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getAllUsers, getUserById } from './src/controller/userController'
import { getAllOrders, getOrderById } from './src/controller/orderController'
import config from 'config';


const port2 = config.get('app.port');
console.log(port2)

const app: Express = express();
const port = process.env.PORT || 3000;



app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', getAllUsers);
app.get('/user/:id', getUserById);
app.get('/orders', getAllOrders);
app.get('/order/:id', getOrderById);

app.listen(port, () => console.log(`Congratz server is running on port :: ${port}!`))
