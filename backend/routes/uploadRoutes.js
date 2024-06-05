const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");

const router = express.Router();

router.post("/resume", async (req, res) => {
  try {
    const multer = (await import("multer")).default;
    const pipeline = promisify(require("stream").pipeline);
    
    const upload = multer();
    const { file } = req;
    
    if (file.detectedFileExtension !== ".pdf") {
      return res.status(400).json({
        message: "Invalid format",
      });
    }
    
    const filename = `${uuidv4()}${file.detectedFileExtension}`;

    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/resume/${filename}`)
    );

    res.send({
      message: "File uploaded successfully",
      url: `/host/resume/${filename}`,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Error while uploading",
    });
  }
});

router.post("/profile", async (req, res) => {
  try {
    const multer = (await import("multer")).default;
    const pipeline = promisify(require("stream").pipeline);
    
    const upload = multer();
    const { file } = req;

    if (
      file.detectedFileExtension !== ".jpg" &&
      file.detectedFileExtension !== ".png"
    ) {
      return res.status(400).json({
        message: "Invalid format",
      });
    }

    const filename = `${uuidv4()}${file.detectedFileExtension}`;

    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../public/profile/${filename}`)
    );

    res.send({
      message: "Profile image uploaded successfully",
      url: `/host/profile/${filename}`,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Error while uploading",
    });
  }
});

module.exports = router;
