import express from "express";
import cors from "cors";
import experiencesRouter from "./routes/experiences";
import bookingsRouter from "./routes/bookings";
import promoRouter from "./routes/promo";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/experiences", experiencesRouter);
app.use("/bookings", bookingsRouter);
app.use("/promo", promoRouter);

export default app;
