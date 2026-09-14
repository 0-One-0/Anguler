import { Router } from 'express';
import { addProduct, addTestData, getAllProducts } from '../services/product.service';


const router = Router();

router.get('/products', (req, res) => {
  try{
    const products = getAllProducts();
    res.status(200).json(products)
  }catch(error){
    res.status(404).json({error: (error as Error).message})
  }
 });        // → GET /api/admin/products
router.post('/products', (req, res) => {
    try {
    const created = addProduct(req.body);
    res.status(201).json(created);
  } catch (error) {
    res.status(409).json({ error: (error as Error).message });
  }
}); 
router.post('/products/testdata', (req, res) => {
  const message = addTestData();
  res.status(201).json({message});
});        // → POST /api/admin/products
router.put('/products/:slug', (req, res) => { });     // → PUT /api/admin/products/:id
router.delete('/products/:slug', (req, res) => {});  // → DELETE /api/admin/products/:id

export default router;