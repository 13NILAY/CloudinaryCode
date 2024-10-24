const express =require("express");
const router=express.Router();
const {uploadFiles} =require("../controller/fileUpload");

router.post("/uploadFiles",uploadFiles);

module.exports =router;