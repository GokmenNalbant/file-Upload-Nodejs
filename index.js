const express = require("express");
const multer = require("multer");
const uuid = require('uuid').v4;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const {originalname} = file;
        cb(null, originalname);
    }
})
const upload = multer({ storage });


const app = express();


app.use(express.static('public'));

app.post("/upload", upload.single("avatar"), (req, res) => {
    return res.send("<h1>yes</h1>");
});



app.listen(3000, () => console.log("App is listening"));