const spi=require('../models/spi_index');

module.exports.postSPI = async(req,res,next)=>{
    try{
    const data=req.body;
    await Event.findOneAndUpdate(location, {
        $push: { data: data },
      });
      res.status(200).json(data);
    }
    catch(err){
        next(err);
    }
}