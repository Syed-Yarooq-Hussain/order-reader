import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app: Express  = express();
const port = 3000;

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hi Api has been called Syed')
});

app.listen(port, () => console.log(`Congratz server is running on port :: ${port}!`))