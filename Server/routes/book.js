import express from "express";
import { getAllBooks, postBooks, getOwnerBooks } from "../controllers/book.js";

const router = express.Router();

router.route("/get-all-books").get(getAllBooks);
router.route("/get-books/:ownerId").get(getOwnerBooks);
router.route("/post-book").post(postBooks);

export default router;
