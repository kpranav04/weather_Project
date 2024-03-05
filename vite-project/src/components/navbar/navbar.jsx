import React, { Component } from "react";
import { MenuData } from "./MenuData";
// import {bootstrap} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar_css.css";

import Dropdown from "./Dropdown";
import { AuthContext } from "../../hooks/context/AuthContext";
import { useContext } from "react";
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';
const Navbar=()=>{

  // const bootstrap = require('bootstrap')
   const {user,dispatch, logout} =useContext(AuthContext);

 
 
 
console.log("hi console");
const handlelogClick=()=>{
   
  //   toast.info('Logout Succesfully ', {
  //     position: toast.POSITION.TOP_CENTER
  // });
  console.log("logout");
  dispatch({ type: "LOGOUT" });
 logout();
  navigate.push("/");
}
console.log(user);

    return (
      <>
  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">IIT INDORE ENVIRONMENT Index's</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Index's</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            {user ? <> <a class="nav-link active" aria-current="page" onClick={handlelogClick} href="/">Logout</a> </>: <><a class="nav-link active" aria-current="page" href="/login">Login</a></>
            }
           
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/graph_spi">SPI Precipitation Graph</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Precipitation Index
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/spi">SPI</a></li>
              <li><a class="dropdown-item" href="/sri">SRI</a></li>
              <li><a class="dropdown-item" href="/ssi">SSI</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Update/Delete Precipitation Index
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="/search_spi">SPI</a></li>
              <li><a class="dropdown-item" href="/search_sri">SRI</a></li>
              <li><a class="dropdown-item" href="/search_ssi">SSI</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
</>
    )
  
}

export default Navbar;
