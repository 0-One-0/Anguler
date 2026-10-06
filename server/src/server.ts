
import express from "express";
import productsRouter from './routes/products.routes';
import adminRouter from './routes/admin.routes';

const PORT = 8000;

// Skapa en instans av Express
const app = express();

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/admin', adminRouter);

// Börja lyssna efter inkommande anrop
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})