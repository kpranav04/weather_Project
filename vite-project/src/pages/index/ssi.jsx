import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyMap from "../../components/map/map";
import Navbar from "../../components/navbar/navbar";
import './ssi.css';
import Select from 'react-select';
import kba from './KBA.json'
import { AuthContext } from "../../hooks/context/AuthContext";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

function SSI() {
 const {user}=useContext(AuthContext);
  const [data, setData] = useState({
    location: undefined,
    valuee: undefined,
    ssi_index: undefined,

  });
  const [datee, setDate] = useState(new Date());
  const [dateget, setgetDate] = useState(new Date());

  const [index,setIndex]=useState([]);

  const [cred,setCred]=useState({
    month:undefined,
    year:undefined
  })
  const handlegetChange = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [mapData,setMapData]=useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/index/ssi_post', { location: selectedOption.value, month: cred.month, year: cred.year, index: data.ssi_index, value: data.valuee });
    console.log(res);
  };

 
  const handlegetSubmit = async (e) => {
    e.preventDefault();
    console.log(cred.year);
    console.log(cred.month);

    const response = await axios.post("http://localhost:3000/index/ssi_get", {
      month: cred.month,
      year: cred.year,
    });
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
    <div className="spi">
      <Navbar />
      <div className="containera">
      <div className="spi_map">
        <MyMap dataArray={mapData} />
      </div>
      <div className="filters_spi">
      {user?<>
        <h3>City</h3>
        {/* <input
          className='entry'
          type="text"
          required
          onChange={handleChange} placeholder='location' id='location'
        /> */}
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
        <h3>SSI index</h3>
        <input
          className='entry'
          type="number"
          required
          onChange={handleChange} placeholder='ssi_index' id='ssi_index'
          />
        <h3>Data</h3>
        <input
          className='entry'
          type="number"
          required
          onChange={handleChange} placeholder='value' id='valuee'
        />

<h2>Year</h2>
          <select class="entry" required onChange={handlegetChange} id="year">
            <option value="">Select a year</option>
            {Array.from({ length: 81 }, (_, i) => (
              <option key={i} value={i + 1950}>
                {i + 1950}
              </option>
            ))}
          </select>

          <h2>Month</h2>
          <select class="entry" required onChange={handlegetChange} id="month">
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
        <button onClick={handleSubmit}>Postdata</button>

            </>:<></>}
   

     <h3>Get Data Box</h3>

     <h2>Year</h2>
          <select class="entry" required onChange={handlegetChange} id="year">
            <option value="">Select a year</option>
            {Array.from({ length: 81 }, (_, i) => (
              <option key={i} value={i + 1950}>
                {i + 1950}
              </option>
            ))}
          </select>

          <h2>Month</h2>
          <select class="entry" required onChange={handlegetChange} id="month">
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

          <button onClick={handlegetSubmit}>Get Data</button>
      </div>
      



      </div>


    </div>
  );

}

export default SSI;