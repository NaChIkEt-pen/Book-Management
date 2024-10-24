import express from "express";
import book_router from "./routes/book.js";
import prisma from "./prisma/client.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Welcome to Book Place");
});

// Middleware
app.use("/book", book_router);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is working in the ${process.env.NODE_ENV} mode`);
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();

// Graceful shutdown on SIGINT (Ctrl + C) and SIGTERM (server stop) by managing Prisma Client connection
const gracefulShutdown = async () => {
  try {
    console.log("Received shutdown signal, closing Prisma connection...");

    await prisma.$disconnect();

    console.log("Prisma Client disconnected. Exiting process...");
  } catch (err) {
    console.error("Error during shutdown: ", err);
  }
};

// Listen for shutdown signals
process.on("SIGINT", gracefulShutdown); // On Ctrl + C
process.on("SIGTERM", gracefulShutdown); // On termination (e.g., from process managers)