const express=require("express");
const {postSPI,getSPIdata}= require("../controllers/index");

const router=express.Router();

router.post("/spi_post", postSPI);
router.post("/spi_get", getSPIdata);

module.exports=router;