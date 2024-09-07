const express = require("express");
const router = express.Router();

const { getAllBooks, postBooks } = require("../controllers/book");

router.route("/get-all-books").get(getAllBooks);
router.route("/post-book").post(postBooks);

module.exports = router;
