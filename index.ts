import  PrismaClient  from "@testing-library/dom";
import app from "./app";


const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();

app.locals.prisma = prisma;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
