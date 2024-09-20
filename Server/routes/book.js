import express from "express";
import fs from "fs";
import {
  getAllBooks,
  postBooks,
  getOwnerBooks,
  deleteBook,
} from "../controllers/book.js";

const router = express.Router();

import multer from "multer";
import path from "path";

// const uploadDir = "./uploads";

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const ownerId = req.body.ownerId || "unknownOwner";
    const originalName = file.originalname.replace(/\s+/g, "_");
    cb(null, `${ownerId}_${originalName}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp|bmp|tiff/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = file.mimetype.startsWith("image");

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Only image files are allowed!");
    }
  },
});

router.route("/get-all-book").get(getAllBooks);
router.route("/get-book/:ownerId").get(getOwnerBooks);
router.route("/post-book").post(upload.single("bookFile"), postBooks);
router.route("/delete-book/:id").delete(deleteBook);


export default router;
