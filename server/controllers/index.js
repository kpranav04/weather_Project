const Spi = require("../models/spi_index");
const Ssi = require("../models/ssi_index");
const Sri = require("../models/sri_index");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "KBA.json");

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
    December: 12,
  };

  return months[monthText];
}

const citiesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

module.exports.postSPI = async (req, res, next) => {
  try {
    // const locationreq.body.location;
    console.log(req.body.location);
    const dat = req.body.date.split("T")[0];
    // const dat = req.body.date.split('T')[0];
    // const dat = req.body.date;
    console.log(dat);

    console.log(dat);
    const date = await Spi.findOne({ date: dat });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      value: req.body.value,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
    console.log(data);
    // if (date) {
    //     await Spi.findOneAndUpdate(date, {
    //         $push: { data: data },
    //     });
    //     console.log(data);
    //     res.status(200).json(data);
    // }
    // else {

    const newloc = new Spi({ date: dat, data: data });
    const saved = await newloc.save();
    // await Spi.findOneAndUpdate(location, {
    //     $push: { data: data },
    // });
    console.log(data);
    res.status(200).json(data);

    // }
  } catch (err) {
    next(err);
  }
};

module.exports.postSSI = async (req, res, next) => {
  try {
    // const locationreq.body.location;

    const dat = req.body.date.split("T")[0];
    // const dat = req.body.date.split('T')[0];
    // const dat = req.body.date;
    console.log(dat);

    console.log(dat);
    const date = await Ssi.findOne({ date: dat });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      value: req.body.value,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
    console.log(data);
    // if (date) {
    //     await Spi.findOneAndUpdate(date, {
    //         $push: { data: data },
    //     });
    //     console.log(data);
    //     res.status(200).json(data);
    // }
    // else {

    const newloc = new Ssi({ date: dat, data: data });
    const saved = await newloc.save();
    // await Spi.findOneAndUpdate(location, {
    //     $push: { data: data },
    // });
    console.log(data);
    res.status(200).json(data);

    // }
  } catch (err) {
    next(err);
  }
};

module.exports.postSRI = async (req, res, next) => {
  try {
    // const locationreq.body.location;

    const dat = req.body.date.split("T")[0];
    // const dat = req.body.date.split('T')[0];
    // const dat = req.body.date;
    console.log(dat);

    console.log(dat);
    const date = await Sri.findOne({ date: dat });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      value: req.body.value,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
    console.log(data);
    // if (date) {
    //     await Spi.findOneAndUpdate(date, {
    //         $push: { data: data },
    //     });
    //     console.log(data);
    //     res.status(200).json(data);
    // }
    // else {

    const newloc = new Sri({ date: dat, data: data });
    const saved = await newloc.save();
    // await Spi.findOneAndUpdate(location, {
    //     $push: { data: data },
    // });
    console.log(data);
    res.status(200).json(data);

    // }
  } catch (err) {
    next(err);
  }
};

module.exports.getSPIdataMONTH = async (req, res, next) => {
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
  const da = year + "-" + month + "-01";
  console.log(da);
  //   const da = daba.split('T')[0];
  //   console.log(da);
  try {
    // Query your database based on year and month
    // console.log( parseInt(year+`-`+monthNumber+`-01`));

    // console.log( new Date(year+`-`+monthNumber+`-01`));

    const data = await Spi.find({
      //   date:  new Date(year+`-`+monthNumber+`-01`), // Starting date of the year
      date: da,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSPIdata = async (req, res, next) => {
  const dates = req.body.dateget;
  const date = dates.split("T")[0];
  console.log(date);
  // console.log(year,month);
  // const date = new Date(`${month} 1, 2000`); // Using 2000 as an arbitrary year

  // Get the numerical value of the month (0 for January, 1 for February, etc.)
  //   const monthNumber = date.getMonth() + 1;
  //    const ye=parseInt(year)+1;
  //    console.log(ye)
  // Example usage:
  //   const monthText = 'January'; // Replace this with your text representation of the month

  //   const da = daba.split('T')[0];
  //   console.log(da);
  try {
    // Query your database based on year and month
    // console.log( parseInt(year+`-`+monthNumber+`-01`));

    // console.log( new Date(year+`-`+monthNumber+`-01`));

    const data = await Spi.find({
      //   date:  new Date(year+`-`+monthNumber+`-01`), // Starting date of the year
      date: date,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSSIdata = async (req, res, next) => {
  const dates = req.body.dateget;
  const date = dates.split("T")[0];
  // console.log(year,month);
  // const date = new Date(`${month} 1, 2000`); // Using 2000 as an arbitrary year

  // Get the numerical value of the month (0 for January, 1 for February, etc.)
  //   const monthNumber = date.getMonth() + 1;
  //    const ye=parseInt(year)+1;
  //    console.log(ye)
  // Example usage:
  //   const monthText = 'January'; // Replace this with your text representation of the month

  //   const da = daba.split('T')[0];
  //   console.log(da);
  try {
    // Query your database based on year and month
    // console.log( parseInt(year+`-`+monthNumber+`-01`));

    // console.log( new Date(year+`-`+monthNumber+`-01`));

    const data = await Ssi.find({
      //   date:  new Date(year+`-`+monthNumber+`-01`), // Starting date of the year
      date: date,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSRIdata = async (req, res, next) => {
  const dates = req.body.dateget;
  const date = dates.split("T")[0];
  // console.log(year,month);
  // const date = new Date(`${month} 1, 2000`); // Using 2000 as an arbitrary year

  // Get the numerical value of the month (0 for January, 1 for February, etc.)
  //   const monthNumber = date.getMonth() + 1;
  //    const ye=parseInt(year)+1;
  //    console.log(ye)
  // Example usage:
  //   const monthText = 'January'; // Replace this with your text representation of the month

  //   const da = daba.split('T')[0];
  //   console.log(da);
  try {
    // Query your database based on year and month
    // console.log( parseInt(year+`-`+monthNumber+`-01`));

    // console.log( new Date(year+`-`+monthNumber+`-01`));

    const data = await Sri.find({
      //   date:  new Date(year+`-`+monthNumber+`-01`), // Starting date of the year
      date: date,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

//   module.exports.editSPI= async (req,res,next)=>{

//     try{
//       const ide=req.body.id;
//       const updatedspi=await Spi.findByIdAndUpdate({ _id:ide}, data.index:req.body.index )
//             // const updatedEvent=await Event.findByIdAndUpdate(
//             //     req.params.id,
//             //     { $set: req.body },
//             //     { new: true }
//             //   );
//             console.log(updatedspi);
//               res.status(200).json(updatedspi);
//     }
//     catch(err){
//         next(err);
//     }
// };

//   module.exports.deleteSPI= async (req,res,next)=>{

//     try{
//       const ide=req.body.id;
//       const despi=await Spi.findByIdAndDelete({ _id:ide} )
//             // const updatedEvent=await Event.findByIdAndUpdate(
//             //     req.params.id,
//             //     { $set: req.body },
//             //     { new: true }
//             //   );
//             console.log(despi);
//               res.status(200).json(despi);
//     }
//     catch(err){
//         next(err);
//     }
// };



module.exports.getDataByLocationDateIndex = async (req, res, next) => {
  try {
    const { location, date, Index } = req.body;
    console.log("___________")
    console.log(location, date, Index);

    const date1 = date.split("T")[0];
    // console.log(date1);

    const filter = {};

    if (date) filter['date'] = date1;
    if (location || Index) {
      if (location) filter["data.location"] = location;
      if (Index) filter["data.index"] = Index;
    }

    console.log(filter);

    const filteredData = await Spi.find(filter);
    console.log(filteredData)
    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.editData = async (req, res, next) => {

  try {
    const dataq={
      index:parseInt(req.body.data.index),
      value:req.body.data.value
    }
    const updatedData = await Spi.findByIdAndUpdate(
      req.body.id,
      { $set:{ 'data.index': dataq.index,
      'data.value': dataq.value }, },
      { new: true }
    );
    console.log("edited")
    console.log(updatedData)
    res.status(200).json(updatedData);
  }
  catch (err) {
    next(err);
  }
};
// DELETE User
module.exports.deleteData = async (req, res, next) => {
  const ide = req.body.id;

  try {
    await Spi.findByIdAndDelete(ide);
    res.status(200).json("User has been deleted.");
  }
  catch (err) {
    next(err);
  }

};