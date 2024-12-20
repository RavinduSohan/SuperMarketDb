import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js'; 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
