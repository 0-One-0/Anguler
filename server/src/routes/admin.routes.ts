import { Router } from 'express';
import { addTestData } from '../services/product.service';


const router = Router();

router.get('/products', (req, res) => { });        // → GET /api/admin/products
router.post('/products', (req, res) => {}); 
router.post('/products/testdata', (req, res) => {
  const message = addTestData();
  res.status(201).json({message});
});        // → POST /api/admin/products
router.put('/products/:slug', (req, res) => { });     // → PUT /api/admin/products/:id
router.delete('/products/:slug', (req, res) => {});  // → DELETE /api/admin/products/:id

export default router;