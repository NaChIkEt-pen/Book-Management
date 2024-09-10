import { prisma } from "../server.js";

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books); // 200 OK
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" }); // 500 Internal Server Error
  }
};

// Get books by owner
export const getOwnerBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany({
      where: {
        // ownerId: parseInt(req.params.ownerId),
        ownerId: req.params.ownerId,
      },
    });
    if (books.length === 0) {
      res.status(404).json({ message: "No books found for this owner" }); // 404 Not Found
    } else {
      res.status(200).json(books); // 200 OK
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" }); // 500 Internal Server Error
  }
};

// Post a new book
export const postBooks = async (req, res) => {
  console.log(req.file.filename);
  try {
    const book = await prisma.book.create({
      data: {
        bookName: req.body.bookName,
        ownerId: req.body.ownerId,
        author: req.body.author || null,
        genre: req.body.genre || null,
        summary: req.body.summary || null,
        path: req.file ? req.file.filename : null,
      },
    });
    res.status(201).json(book); // 201 Created
  } catch (error) {
    res.status(400).json({ error: "Failed to create book" }); // 400 Bad Request
  }
};
