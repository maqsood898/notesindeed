import express from "express";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import pdfRoutes from "./routes/pdfs.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express()

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/data/img')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage})

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/pdfs", pdfRoutes)

const PORT = 8800;

app.listen(PORT, () => {
    console.log("Server started");
});