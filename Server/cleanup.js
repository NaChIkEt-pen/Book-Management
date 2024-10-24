
(
    async () => {
        const { default: prisma } = await import("./prisma/client.js");
        console.log(
          "Cleaning up previous Prisma Client connections before restart..."
        );
        await prisma.$disconnect();
        console.log("Previous Prisma Client disconnected.");
    }
)();