import Navbar from "../../components/navbar/navbar";
import "./filters.css";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Select from 'react-select';
import kba from './KBA.json'
import { AuthContext } from "../../hooks/context/AuthContext";

const Tabble = ({ item, index }) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [editData, setEditData] = useState({ index:item.data.index, value: item.data.value });
    
    const {user}=useContext(AuthContext);

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

            <td><input type="text" className="iput" value={editData.value}  disabled={editEnabled} onChange={handleChange} id="value" /></td>
            {user ? 
            <td style={{width:"5rem"}} className="tdbtn">
                {editEnabled ?
                    <button className="update" onClick={() => { setEditEnabled(!editEnabled); }}>  Update </button>
                    :
                    <button className="update" onClick={handleSubmitButton}>  Submit </button>
                }
                <button className="delete" onClick={handleDelete} > Delete</button>
            </td> :<></>
          }
            {/* </tr> */}



        </>
    );
};

export default Tabble;