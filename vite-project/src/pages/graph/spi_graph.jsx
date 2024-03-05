import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import Select from "react-select";
import { useState, useEffect } from "react";
import kba from "./KBA.json";
import "./graph.css";
import Plot from "react-plotly.js";

function Graph_spi() {
  const [cred, setCred] = useState({
    year: undefined,
  });
  // const [year,setYear]=useState(1951);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const arr = [];
  const [D1, setD3] = useState();
  const [D2, setD4] = useState();
  const [D3, setD5] = useState();
  const [D4, setD6] = useState();
  // const handlegetChange=(year)=>{
  const handlegetChange = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // }
  const handlegetdata = async () => {
    console.log(cred.year);
    console.log(selectedOption.value);

    const res = await axios.post("http://localhost:3000/index/graph_spi", {
      year: cred.year,
      location: selectedOption.value,
    });
    console.log(res.data.D3);
    setD3(res.data.D3);
    setD4(res.data.D4);
    setD5(res.data.D5);
    setD6(res.data.D6);
  };
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

  const d1 = "D1";
  const d2 = "D2";
  const d3 = "D3";
  const d4 = "D4";

  return (
    <>
      <Navbar />
      <div style={{backgroundColor:"white"}}>
        <div className="app-container2" id="spi_graph" >
          <h1>DATA</h1>
          <label style={{ width: "19rem" }}>
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
          <label style={{ width: "19rem" }}>
            Year:
            <br />
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
          </label>
        </div>
        <div className="graphPlot">
          <Plot style={{marginTop:"4rem", height:"35rem", width:"45rem"}} id="graphplot"
            data={[
              {
                fill: "tonexty",
                type: "scatter",
                x: [1, 2, 3, 4],
                y: [D1, D2, D3, D4],
              },
              {
                fill: "tozeroy",
                type: "scatter",
                x: [1, 2, 3, 4],
                y: [D1, D2, D3, D4],
              },
            ]}
            layout={{
              width: 720,
              height: 520,
              title: "",
              xaxis: {
                title: "X-Axis Label",
                ticktext: [d1, d2, d3, d4],
                tickvals: [1, 2, 3, 4],
              },
              margin: {
                l: 50,
                r: 50,
                b: 100,
                t: 100,
                pad: 4,
              },
              paper_bgcolor: "#7f7f7f",
              plot_bgcolor: "#c7c7c7",
              yaxis: {
                title: "Y-Axis Label",
                dtick: 100,
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Graph_spi;
