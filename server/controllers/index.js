const Spi = require('../models/spi_index');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'KBA.json');



function convertMonthToNumber(monthText) {
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    };
  
    return months[monthText];  
  }
  
const citiesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));



module.exports.postSPI = async (req, res, next) => {
    try {
        // const locationreq.body.location;
       
        const dat = req.body.date.split('T')[0];
        // const dat = req.body.date.split('T')[0];
        // const dat = req.body.date;
        console.log(dat);


        console.log(dat);
        const date = await Spi.findOne({ date: dat });
        const cityInfo = citiesData.find(city => city.KBA === req.body.location);
        console.log(cityInfo);
        const data = {
            location: req.body.location,
            index: req.body.index,
            value: req.body.value,
            latitude: cityInfo.Latitude,
            longitude:cityInfo.Longitude
        }
        console.log(data);
        // if (date) {
        //     await Spi.findOneAndUpdate(date, {
        //         $push: { data: data },
        //     });
        //     console.log(data);
        //     res.status(200).json(data);
        // }
        // else {
            


            const newloc = new Spi({ date: dat ,data:data});
            const saved = await newloc.save();
            // await Spi.findOneAndUpdate(location, {
            //     $push: { data: data },
            // });
            console.log(data);
            res.status(200).json(data);

        // }

    }


    catch (err) {
        next(err);
    }
}

module.exports.getSPIdata = async(req,res,next)=>{
   
    const { year, month } = req.body;
    // console.log(year,month);
    // const date = new Date(`${month} 1, 2000`); // Using 2000 as an arbitrary year

  // Get the numerical value of the month (0 for January, 1 for February, etc.)
    //   const monthNumber = date.getMonth() + 1;
//    const ye=parseInt(year)+1;
//    console.log(ye)
  // Example usage:
//   const monthText = 'January'; // Replace this with your text representation of the month
  const monthNumber = month;
  const da = year+"-"+month+"-01";
  console.log(da)
//   const da = daba.split('T')[0];
//   console.log(da);
  try {
    // Query your database based on year and month
    // console.log( parseInt(year+`-`+monthNumber+`-01`));

    // console.log( new Date(year+`-`+monthNumber+`-01`));

    const data = await Spi.find({
      
    //   date:  new Date(year+`-`+monthNumber+`-01`), // Starting date of the year
       date:da,
    });
    console.log(data);
    res.json(data);
  }   catch(err){
    next(err);
}

    }