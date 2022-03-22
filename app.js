const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, file?.originalname);
    }
});
app.use(multer({ storage: storageConfig }).single("filedata"));

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const BaseController = require("./controllers/BaseController");

app.post("/add", urlencodedParser, BaseController.addTask);
app.use("/", BaseController.getTasks);

app.listen(3000);