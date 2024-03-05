const express=require("express");
const {postSPI,getSPIdata, postSSI, getSSIdata, postSRI, getSRIdata, getSPIdataMONTH, getDataByLocationDateIndex, deleteData_spi, editData_spi, getDataByLocationDateIndex_spi, deleteData_ssi, editData_ssi, getDataByLocationDateIndex_ssi,deleteData_sri, editData_sri, getDataByLocationDateIndex_sri, graph_spi,graph_ssi_data_pushing}= require("../controllers/index");

const router=express.Router();
router.post("/ssi_posting", graph_ssi_data_pushing);
router.post("/spi_post", postSPI);
router.post("/spi_get", getSPIdataMONTH);
router.post("/spi_get_daily", getSPIdata);
router.post("/ssi_post", postSSI);
router.post("/ssi_get", getSSIdata);
router.post("/sri_post", postSRI);
router.post("/sri_get", getSRIdata);
router.post("/filters_spi", getDataByLocationDateIndex_spi);
router.put("/edit_spi", editData_spi );
router.put("/delete_spi", deleteData_spi);
router.post("/filters_sri", getDataByLocationDateIndex_sri);
router.put("/edit_sri", editData_sri );
router.put("/delete_sri", deleteData_sri);
router.post("/filters_ssi", getDataByLocationDateIndex_ssi);
router.put("/edit_ssi", editData_ssi);
router.put("/delete_ssi", deleteData_ssi);
router.post("/graph_spi", graph_spi);

module.exports=router;