import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyMap from "../../components/map/map";
import Navbar from "../../components/navbar/navbar";
import './spi.css';
import kba from './KBA.json'
import Select from 'react-select';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function SPI() {

  const [data, setData] = useState({
    location: undefined,
    valuee: undefined,
    spi_index: undefined,

  });
  const [datee, setDate] = useState(new Date());
  const [dateget, setgetDate] = useState(new Date());

  const [index,setIndex]=useState([]);

  const [cred,setCred]=useState({
    month:undefined,
    year:undefined
  })
  const [mapData,setMapData]=useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/index/spi_post', { location: selectedOption.value, date: datee, index: data.spi_index, value: data.valuee });
    console.log(res);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:3000/index/spi_post', { location: data.location, date: datee, index: data.spi_index, value: data.valuee });
  //   console.log(res);
  // };

  const handlegetChange = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handlegetSubmit = async (e) => {
    e.preventDefault();
    console.log(cred.year);
    console.log(cred.month);

    const response = await axios.post('http://localhost:3000/index/spi_get', { month:cred.month,year:cred.year });
    console.log(response.data);
    setMapData(response.data);
  };

  const handlegetSubmitDaily = async (e) => {
    e.preventDefault();
   

    const response = await axios.post('http://localhost:3000/index/spi_get_daily', { dateget});
    console.log(response.data);
    setMapData(response.data);
  };
 ///FILTER
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInputValue('');
  };

  // Filter options based on input value
  const filteredOptions = kba.filter((option) =>
    option.KBA.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  // Map options for react-select format
  const options = filteredOptions.map((option) => ({
    value: option.KBA,
    label: option.KBA,
  }));
//FILTER ENDS


  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="spi_map">
        <MyMap dataArray={mapData} />
      </div>
      <div className="filters_spi">
      
        <h3>City</h3>
        {/* <input
          className='entry'
          type="text"
          required
          onChange={handleChange} placeholder='location' id='location'
        /> */}
        {/* <select
            className="entry"
            required
            onChange={handlegetChange}
            id="location"
          >
            <option value="">location</option>
            {kba.map( (loc) => (
              <option key={loc.id} value={loc.KBA}>
                {loc.KBA}
              </option>
            ))}
          </select> */}
          <Select
        value={selectedOption}
        onChange={handleOptionChange}
        onInputChange={handleInputChange}
        options={options}
        inputValue={inputValue}
        isClearable
        isSearchable
        placeholder="Search location..."
      />
        <h3>Spi index</h3>
        <input
          className='entry'
          type="number"
          required
          onChange={handleChange} placeholder='spi_index' id='spi_index'
        />
        <h3>Data</h3>
        <input
          className='entry'
          type="number"
          required
          onChange={handleChange} placeholder='value' id='valuee'
        />

        <h3>Date</h3>
        <DatePicker selected={datee} onChange={(datee) => setDate(datee)} />
        <button onClick={handleSubmit}>Postdata</button>

   

     <h3>Get Data Box MONTHLY</h3>
      <h2>Year</h2>
          <select
            className="entry"
            required
            onChange={handlegetChange}
            id="year"
          >
            <option value="">Select a year</option>
           
            {Array.from({ length: 81 }, (_, i) => (
              <option key={i} value={i + 1950}>
                {i + 1950}
              </option>
            ))}
          </select>
       <h2>Month</h2>
      <select
        className="entry"
        required
        onChange={handlegetChange}
        id="month"
      >
        <option value="">Select a month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <button onClick={handlegetSubmit}>Getdata</button>


      <h3>Get spi Data Box Daily</h3>

<DatePicker selected={dateget} onChange={(dateget) => setgetDate(dateget)} />
<button onClick={handlegetSubmitDaily}>Getdata</button>
      </div>
      



      </div>


    </div>
  );

}

export default SPI;