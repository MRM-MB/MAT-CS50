require("dotenv").config()
const multer = require("multer")
const bcrypt = require("bcrypt")
const File = require("./models/File")
const sequelize = require("./config/database")

const express = require("express")
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/assets", express.static("public"));

const upload = multer({ dest: "uploads" })

// Sync database
sequelize.sync().then(() => {
    console.log("Database synced");
}).catch((err) => {
    console.error("Failed to sync database:", err);
});

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

app.get('/home', function(req, res) {
    res.render('home');
});

app.post("/upload", upload.single("file"), async (req, res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname
    }
    if(req.body.password != null && req.body.password !== "") {
        fileData.password = await bcrypt.hash(req.body.password, 10)
    }

    const file = await File.create(fileData)
    
    res.render("index", { fileLink: `${req.protocol}://${req.get('host')}/file/${file.id}` })
})

app.route("/file/:id").get(handleDownload).post(handleDownload)

async function handleDownload(req, res) {
    const file = await File.findByPk(req.params.id)

    if (!file) {
        return res.status(404).send("File not found");
    }

    if (file.password != null) {
        if (req.body.password == null) {
            res.render("password")
            return
        }

        if(!await bcrypt.compare(req.body.password, file.password)) {
            res.render("password", { error: true })
            return
        }
    }

    file.downloadCount++
    await file.save()
    console.log(file.downloadCount)

    res.download(file.path, file.originalName)   
}

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})


