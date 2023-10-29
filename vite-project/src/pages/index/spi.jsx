import { useState } from "react";
import DatePicker from "react-datepicker";
function SPI(){

    const [data, setData] = useState({
        location:undefined,
        value:undefined,
        spi_index:undefined,
        date:undefined
      });
      
        const handleChange = (e) => {
          setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
            const res=await axios.post('http://localhost:3000/index/postSPI');
            console.log(res);
          };



    return(
        <>
          <h2>city</h2>
        <input
               className='entry'
               type="text"
               required
               onChange={handleChange} placeholder='location' id='location'
         />
        <h2>spi index</h2>
         <input
                className='entry'
                type="number"
                required
                onChange={handleChange} placeholder='spi_index' id='spi_index'
              />
        <h2>data</h2>
        <input
               className='entry'
               type="number"
               required
               onChange={handleChange} placeholder='value' id='value'
         />
        
  <h2>DATE</h2>
         <DatePicker  onChange={(date) => setStartDate(date)} />
         <button onClick={handleSubmit}></button>




       </>
    );

}

export default SPI;