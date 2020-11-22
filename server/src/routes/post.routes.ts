import { Router } from "express";
import { getAllPosts } from "../controllers/post.controllers";
const router = Router();

router.get("/posts", getAllPosts);

export default router;
