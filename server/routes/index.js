const express=require("express");
const {postSPI,getSPIdata, postSSI, getSSIdata, postSRI, getSRIdata, getSPIdataMONTH, getDataByLocationDateIndex}= require("../controllers/index");

const router=express.Router();

router.post("/spi_post", postSPI);
router.post("/spi_get", getSPIdataMONTH);
router.post("/spi_get_daily", getSPIdata);
router.post("/ssi_post", postSSI);
router.post("/ssi_get", getSSIdata);
router.post("/sri_post", postSRI);
router.post("/sri_get", getSRIdata);
router.post("/filters", getDataByLocationDateIndex);

module.exports=router;