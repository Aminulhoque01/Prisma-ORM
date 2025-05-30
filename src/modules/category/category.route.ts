import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();
router.post("/create-category", categoryController.inserIntoDB);


export const categoryRoutes = router;