import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyMap from "../../components/map/map";
import Navbar from "../../components/navbar/navbar";
import './spi.css';

function SPI() {

  const [data, setData] = useState({
    location: undefined,
    valuee: undefined,
    spi_index: undefined,

  });
  const [datee, setDate] = useState(new Date());


  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/index/spi_post', { location: data.location, date: datee, index: data.spi_index, value: data.valuee });
    console.log(res);
  };



  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="spi_map">
        <MyMap />
      </div>
      <div className="filters_spi">
      <h2>Year</h2>
          <select
            className="entry"
            required
            onChange={handleChange}
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
        onChange={handleChange}
        id="month"
      >
        <option value="">Select a month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
        <h3>City</h3>
        <input
          className='entry'
          type="text"
          required
          onChange={handleChange} placeholder='location' id='location'
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
        <DatePicker onChange={(date) => setDate(date)} />
        <button onClick={handleSubmit}></button>

      </div>



      </div>


    </div>
  );

}

export default SPI;