import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDatabase from "./db/connectDB.js";
dotenv.config();

const app = express();
connectDatabase(process.env.MONGO_URI);
const PORT = process.env.PORT || 3000;

//Testing route
app.get("/", (req, res) => {
  res.status(200).json("Server is on");
});

//Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server listening on ${PORT}`);
});
