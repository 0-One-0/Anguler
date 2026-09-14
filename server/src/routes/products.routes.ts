import { Router } from 'express';
import { getFrontPage } from '../services/product.service';


const router = Router();

router.get('/', (req, res) => {
  res.json(getFrontPage(8))
  }); 
router.get('/search', (req, res) => { });      // → GET /api/products/search
router.get('/:slug', (req, res) => { });       // → GET /api/products/:slug
router.get('/:slug/similar', (req, res) => {}); // → GET /api/products/:slug/similar

export default router;