import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {getUser} from './src/controller/userController'


const app: Express  = express();
const port = 3000;

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', getUser);

app.listen(port, () => console.log(`Congratz server is running on port :: ${port}!`))
