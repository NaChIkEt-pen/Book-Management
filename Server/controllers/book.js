import { prisma } from "../server.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    res.status(400).json({ error: "Failed to create book"}); // 400 Bad Request
  }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the book by ID first (optional but good for validation)
    const book = await prisma.book.findUnique({
      where: { bookId: id },
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Construct the file path (ensure it matches how the file is stored)
    const filePath = path.join(__dirname, "../uploads/", book.path);

    let deleteFileError = false;

    // Delete the file from the uploads folder
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file. Couldn't delete in uploads folder a file named: ${book.path} `, err);
        // console.log(`Book Path: ${book.path}`);
        deleteFileError = true;
      }
    });

    // Delete the book
    await prisma.book.delete({
      where: { bookId: id },
    });

    // Return success message but include the file deletion status
    if (deleteFileError) {
      return res
        .status(200)
        .json({ message: "Book deleted but file deletion failed" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
