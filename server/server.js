import express from "express";
import cors from "cors"
import env from "dotenv"
const app = express();
import cookieParser from 'cookie-parser';
import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/authRouter.js";
import productRoutes from "./routes/productRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import paymentRoutes from './routes/paymentRoutes.js';
import authMiddleware from "./middleware/authMiddleware.js";

env.config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
    origin: "http://localhost:5173",
    methods:"POST,GET,PATCH,PUT,DELETE,HEAD",
    credentials: true,
}));

app.use("/api/auth",authRoutes)
app.use('/api/products',authMiddleware, productRoutes);
app.use('/api/orders',authMiddleware, orderRoutes);
app.use('/api/cart',authMiddleware, cartRoutes);
app.use('/api/payments',authMiddleware, paymentRoutes);

const PORT = process.env.PORT || 8000;
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${PORT}`);
});