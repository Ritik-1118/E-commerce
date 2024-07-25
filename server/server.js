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

env.config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
    origin: "http://localhost:8000",
    methods:"POST,GET,PATCH,PUT,DELETE,HEAD",
    credentials: true,
}));

app.use("/api/auth",authRoutes)
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 8000;
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${PORT}`);
});