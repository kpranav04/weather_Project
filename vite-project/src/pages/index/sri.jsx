import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyMap from "../../components/map/map";
import Navbar from "../../components/navbar/navbar";
import './sri.css';
import Select from 'react-select';
import kba from './KBA.json'


// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function SRI() {

  const [data, setData] = useState({
    location: undefined,
    valuee: undefined,
    sri_index: undefined,

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
    const res = await axios.post('http://localhost:3000/index/sri_post', { location: selectedOption.value, date: datee, index: data.sri_index, value: data.valuee });
    console.log(res);
  };

  // const handlegetSubmitDaily = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:3000/index/sri_post', { location: data.location, date: datee, index: data.sri_index, value: data.valuee });
  //   console.log(res);
  // };

 
  const handlegetSubmit = async (e) => {
    e.preventDefault();
   

    const response = await axios.post('http://localhost:3000/index/sri_get', { dateget});
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
        <h3>SRI index</h3>
        <input
          className='entry'
          type="number"
          required
          onChange={handleChange} placeholder='sri_index' id='sri_index'
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

     <DatePicker selected={dateget} onChange={(dateget) => setgetDate(dateget)} />
     <button onClick={handlegetSubmit}>Getdata</button>

  
      </div>
      



      </div>


    </div>
  );

}

export default SRI;