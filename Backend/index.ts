import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getAllUsers, getUserById} from './src/controller/userController'


const app: Express  = express();
const port = 3000;

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', getAllUsers);
app.get('/user/:id', getUserById);

app.listen(port, () => console.log(`Congratz server is running on port :: ${port}!`))
