import { Router } from 'express';
import { addProduct, addTestData, getAllProducts, deleteProduct } from '../services/admin.service';
import { rowCount } from '../services/product.service';


const router = Router();

router.get('/products', (req, res) => {
  try{
      const pageSize = Number(req.query.pageSize);
      const page = Number(req.query.page);
  
      const totalRows = rowCount();
  
      const pages = Math.ceil(totalRows / pageSize)
  
      res.status(200).json({products: getAllProducts(pageSize, page), totalRows , pages})
  
    }catch (error){
      res.status(409).json({error: (error as Error).message})
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
router.delete('/products/:slug', (req, res) => {
  try {
    const result = deleteProduct(req.params.slug);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
});  // → DELETE /api/admin/products/:id

export default router;