import React from "react";
import '../App.js';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPhone} from '@fortawesome/free-solid-svg-icons';

export function Navegacion(){
    return(
        <nav className='nav'>
            <a href= "home" className='logo '>HOLIDAYZ</a> 
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        </style>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
          <li className='nav-menu-item' id='menu'>
          <li><a  href= "#home">Home</a></li>          
          <li><a  href= "#events" >Events</a></li>
          <li><a  href= "#about" >About</a></li>
          <li><a  href= "#blog">Blog</a></li>
          <li><a  href= "#service">Service</a></li>
          <li><a  href= "#experience">Experience</a></li>
          <li><a  href= "#contact" > Contact</a></li>
          </li>
          <div className='telefono'>
          <a href= "#" className='number'><FontAwesomeIcon icon={faPhone} className='phone'/> +1 (123) 456 7890 </a>
          </div> 
      </nav>
    )
}