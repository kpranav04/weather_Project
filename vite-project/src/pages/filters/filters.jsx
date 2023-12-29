import Navbar from "../../components/navbar/navbar";
import "./filters.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AppWithFilter = () => {
  const [filteredData, setFilteredData] = useState();

 


  const handleFilteEffect = async () => {
    const location = ""
    const date = ""
    const Index = ""
    const res = await axios.post("http://localhost:3000/index/filters", {
      location: location,
      date: date,
      Index: Index,
    });
    console.log(res);
    setFilteredData(res.data);
  };

  useEffect(()=>{
    handleFilteEffect();
  },[])

  const handleFilter = async (e) => {
    e.preventDefault();
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const Index = document.getElementById("index").value;
    console.log(location, date, Index);
    const res = await axios.post("http://localhost:3000/index/filters", {
      location: location,
      date: date,
      Index: Index,
    });
    console.log(res);
    setFilteredData(res.data);
  };

  return (
    <>
      <Navbar />
      <div className="app-container1">
        <h1>Filter Data</h1>
        <div className="filter-container">
          <label>
            Location:
            <input type="text" id="location" />
          </label>
          <label>
            Date:
            <input type="text" id="date" />
          </label>
          <label>
            Index:
            <input type="text" id="index" />
          </label>
          <button onClick={handleFilter}>Apply Filters</button>
        </div>
      </div>
      <div className="app-container1">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Index</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData? filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.data.location}</td>
                <td>{item.data.index}</td>
                <td>{item.data.value}</td>
                <td>
                  <button className="update" >  Update </button>
                  <button className="delete" > Delete</button>
                </td>
              </tr>
            )):<div></div>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppWithFilter;
