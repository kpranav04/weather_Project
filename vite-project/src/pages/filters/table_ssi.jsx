import Navbar from "../../components/navbar/navbar";
import "./filters.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import kba from './KBA.json'

const Tabble = ({ item, index }) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [editData, setEditData] = useState({ index:item.data.index, value: item.data.value });
    

    const handleChange = (e) => {
        setEditData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        console.log(editData);
        const result = await axios.put("http://localhost:3000/index/edit_ssi", {id:item._id,data:editData});
        setEditEnabled(!editEnabled);
         console.log(result);
        //  navigate.push('/user/profile');
    };
    const handleDelete = async (e)=>{
        e.preventDefault();
        const result = await axios.put("http://localhost:3000/index/delete_ssi", {id:item._id});

    }
    return (
        <>

            {/* <tr key={index}> */}
            <td>{item.data.location}</td>
            <td><input type="text" value={editData.index}  disabled={editEnabled} onChange={handleChange} id="index" /></td>

            <td>{item.date}</td>

            <td><input type="text" value={editData.value}  disabled={editEnabled} onChange={handleChange} id="value" /></td>
            <td>
                {editEnabled ?
                    <button className="update" onClick={() => { setEditEnabled(!editEnabled); }}>  Update </button>
                    :
                    <button className="update" onClick={handleSubmitButton}>  Submit </button>
                }
                <button className="delete" onClick={handleDelete} > Delete</button>
            </td>
            {/* </tr> */}



        </>
    );
};

export default Tabble;