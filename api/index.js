const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const multer = require("multer");
const path = require("path");
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("MongoDB connected through Mongoose"))
  .catch((err) => console.log(err));
const storage = multer.diskStorage({
  destination: (req, file, cf) => {
    cf(null, "images");
  },
  filename: (req, file, cf) => {
    cf(null, req.body.name); //in api checking not use body use name like: hello.jpeg
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

// deployment
__dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend is Running");
});
