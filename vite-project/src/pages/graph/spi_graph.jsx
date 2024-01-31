import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import Select from 'react-select';
import { useState,useEffect } from "react";
import kba from './KBA.json'
import './graph.css';
function Graph_spi() {
  const [cred,setCred]=useState({
    
    year:undefined
  })
    // const [year,setYear]=useState(1951);
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputValue, setInputValue] = useState('');
    // const handlegetChange=(year)=>{
      const handlegetChange = (e) => {
        setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    // }
    const handlegetdata=async ()=>{
      console.log(cred.year);
      console.log(selectedOption.value);

          
        const res=await axios.post('http://localhost:3000/index/graph_spi',{year:cred.year,location:selectedOption.value});
  }
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

    return (
      <>
      <Navbar/>
      <div className="app-container1">

        <h1>DATA</h1>
        <label>
            Location:
            {/* <input type="text" id="location" /> */}
            <Select
        value={selectedOption}
        onChange={handleOptionChange}
        onInputChange={handleInputChange}
        options={options}
        inputValue={inputValue}
        isClearable
        isSearchable
        placeholder="Search location..."
        id="location"
      />
          </label>
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
           <button onClick={handlegetdata}>GetGraph</button>

      </div>
      </>
    );
  }
  
  export default Graph_spi;