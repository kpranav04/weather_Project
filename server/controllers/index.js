const Spi = require('../models/spi_index');

module.exports.postSPI = async (req, res, next) => {
    try {
        // const locationreq.body.location;
        const location = await Spi.findOne({ location: req.body.location });
        const data = {
            date: req.body.date,
            index: req.body.index,
            value: req.body.value
        }
        if (location) {
            await Spi.findOneAndUpdate(location, {
                $push: { data: data },
            });
            console.log(data);
            res.status(200).json(data);
        }
        else {



            const newloc = new Spi({ location: req.body.location ,data:data});
            const saved = await newloc.save();
            // await Spi.findOneAndUpdate(location, {
            //     $push: { data: data },
            // });
            console.log(data);
            res.status(200).json(data);

        }

    }


    catch (err) {
        next(err);
    }
}

// module.exports.getSPIdata = async(req,res,next)=>{
//     try{
//     const date=req.body;
//     await Event.findOneAndUpdate(location, {
//         $push: { data: data },
//       });
//       res.status(200).json(data);
//     }
//     catch(err){
//         next(err);
//     }
// }