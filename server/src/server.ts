// Importera modulen "express"
import express from "express";

//const PORT = process.env.PORT | 8000;
const PORT = 8000;

// Skapa en instans av Express
const app = express();

const products = [
    { id: 1, name: "Vit T-Shirt", price: 199 },
    { id: 2, name: "Svart T-Shirt", price: 199 }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

// Börja lyssna efter inkommande anrop
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})