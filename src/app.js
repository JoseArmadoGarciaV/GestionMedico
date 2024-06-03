import express from 'express';
import medicsRoutes from './routes/medics.routes.js';

const app = express();

//middleaware
app.use(express.json());


app.use(medicsRoutes);
 
export default app;