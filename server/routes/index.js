const express=require("express");
const {postSPI,getSPIdata}= require("../controllers/auth");

const router=express.Router();

router.post("/spi_post", postSPI),
router.get("/spi_get", getSPIdata),

module.exports=router;