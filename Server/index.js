const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { default: helmet } = require("helmet");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8080;

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const { protect } = require("./module/auth");

app.use(cors());

dotenv.config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use("/images", express.static(path.join(__dirname, "public/images")));

// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`Server is Running on the Port ${port} `);
});
