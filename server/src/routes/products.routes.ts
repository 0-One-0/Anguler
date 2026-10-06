import { Router } from "express";
import { getFrontPage, getProductBySlug, getSimilarRandom, rowCount, searchByName } from "../services/product.service";

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
router.get("/search", (req, res) => {
  
  try{
    const pageSize = Number(req.query.pageSize);
    const page = Number(req.query.page);
    const searchQuery = String(req.query.searchquery);

    const totalRows = rowCount(searchQuery);

    const pages = Math.ceil(totalRows / pageSize)

    res.status(200).json({products: searchByName(searchQuery, pageSize, page), totalRows , pages})

  }catch (error){
    res.status(409).json({error: (error as Error).message})
  }
}); 
router.get("/:slug", (req, res) => {
  try {
    const product = getProductBySlug(req.params.slug);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
}); 
router.get("/:slug/similar", (req, res) => {
  try{
     const product = getSimilarRandom(req.params.slug, 6);
     res.json(product);
  }catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
}); 

export default router;
