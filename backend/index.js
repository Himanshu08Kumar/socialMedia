import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";
import dotenv from "dotenv";
import cors from "cors"; // Import the CORS package
import { users, posts } from "./data/index.js"
import User from "./models/User.js";
import Post from "./models/Post.js";

dotenv.config();
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Specify the allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true // Allow cookies if needed
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/posts", postRoute);
app.use('/users', userRoute);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
    // User.insertMany(users);
    Post.insertMany(posts);
  })
  .catch((err) => {
    console.log(err);
  });
