import express from "express";
import { PrismaClient } from "@prisma/client";
import book_router from "./routes/book.js";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  const book = await prisma.book.create({
    data: {
      bookName: "Dune 3",
      ownerId: 123
    },
  });
  res.send(book);
});

// Middleware
app.use("/book", book_router);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
