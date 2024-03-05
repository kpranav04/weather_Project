import Navbar from "../../components/navbar/navbar";
import "./filters.css";
import "./css.css";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Select from "react-select";
import kba from "./KBA.json";
import Tabble from "./table_ssi";
import { AuthContext } from "../../hooks/context/AuthContext";
const AppWithFilter = () => {
  const [filteredData, setFilteredData] = useState();
  const [editEnabled, setEditEnabled] = useState(true);
  const [editData, setEditData] = useState({ index: "", value: "" });
  const {user}=useContext(AuthContext);

  const handleFilteEffect = async () => {
    const location = "";
    const date = "";
    const Index = "";
    const res = await axios.post("http://localhost:3000/index/filters_ssi", {
      location: location,
      date: date,
      Index: Index,
    });
    console.log(res);
    setFilteredData(res.data);
  };

  useEffect(() => {
    handleFilteEffect();
  }, []);
  const [locations, setLocations] = useState("");
  const handleFilter = async (e) => {
    e.preventDefault();
    // const location = document.getElementById("location").value;
    if (selectedOption) setLocations(selectedOption.value);

    console.log(selectedOption);
    const date = document.getElementById("date").value;
    const Index = document.getElementById("index").value;
    console.log(location, date, Index);
    const res = await axios.post("http://localhost:3000/index/filters_ssi", {
      location: locations,
      date: date,
      Index: Index,
    });
    console.log(res);
    setFilteredData(res.data);
  };
  const handleChange = (e) => {
    setEditData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  ///FILTER
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInputValue("");
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
    <>
      <Navbar />
      <div className="app-container1" id="appcnt1">
        <h1>Filter Data</h1>
        <div className="filter-container">
          <label>
            Location:
            {/* <input type="text" className="inp" id="location" /> */}
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
          <label>
            Date:<br></br>
            <input type="date" className="inp" id="date" />
          </label>
          <label>
            Index:<br/>
            <input type="text" className="inp" id="index" />
          </label>
          <button onClick={handleFilter}>Apply Filters</button>
        </div>
      </div>
      <div className="app-container2" style={{backgroundColor:"beige"}}id="tabl">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Index</th>
              <th>DATE</th>
              <th>Value</th>
              {user ?  <th>Actions</th> : <></>}

            </tr>
          </thead>
          <tbody>
            {filteredData ? (
              filteredData.map((item, index) => (
                <tr>
                  <Tabble item={item} index={index} />
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppWithFilter;
