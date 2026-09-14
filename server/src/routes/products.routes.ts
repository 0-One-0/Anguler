import { Router } from "express";
import { getFrontPage, getProductBySlug, getSimilarRandom } from "../services/product.service";
import { join } from "node:path";
import { error } from "node:console";

const router = Router();

router.get("/", (req, res) => {
  try{
  const limit = Number(req.query.limit);
  if (!limit || limit === 0) {
    res.status(400).json({ error: "not valid limit" });
  } else {
    res.json(getFrontPage(limit));
  }
  }catch(error){
    res.status(404).json({ error: (error as Error).message });
  }
});
router.get("/search", (req, res) => {}); // → GET /api/products/search
router.get("/:slug", (req, res) => {
  try {
    const product = getProductBySlug(req.params.slug);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
}); // → GET /api/products/:slug
router.get("/:slug/similar", (req, res) => {
  try{
     const product = getSimilarRandom(req.params.slug, 6);
     res.json(product);
  }catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
}); // → GET /api/products/:slug/similar

export default router;
