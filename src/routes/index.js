var express = require("express");
var router = express.Router();
var formidable = require("formidable");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(__dirname, "..", "uploads"), // garante que os arquivos sejam salvos em /uploads
    keepExtensions: true, // mantém a extensão do arquivo
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Erro ao fazer upload:", err);
      return res.status(500).json({ error: "Erro no upload" });
    }

    // Retorna algum feedback útil
    res.json({
      files,
    });
  });
});

module.exports = router;
