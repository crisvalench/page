import React from "react";
import '../App.js';
import '../styles/body6.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faArrowRight } from '@fortawesome/free-solid-svg-icons';
import person from '../img/person.png'
export function Experience(){
    return(
        <section className='contenido6' id='experience'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
      </style>

  <div class="flex-container">

  <div class="flex-child magenta">

  <div className='titulos6'>
          <h2><spam>────</spam> Testimonia</h2>
         <spam className='titulo6'>What </spam>
         <spam className='subtitulo6'> CUSTOMERS</spam>
         <spam className='titulo6'> Say? </spam>
        </div>
        <div className='textos6'>
          <p className='texto6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className='texto6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className='texto6'>Lorem Ipsum is simply dummy text of the  </p>
          </div>
          <div>
            <p><a href='#' className='boton'>Write your thought <FontAwesomeIcon icon={faArrowRight} className='flecha'/></a></p>
          </div>
  </div>
  
  <div class="flex-child green">
<figure>
  <img className='person' src={person}></img>
</figure>
<div className='cuadro'>
  <div>
      <p className='tx6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className='cuadrito'>
        <p className='name'>Kyiloria Danu</p>
        <div className='stars'>
          <a>⭐️</a>
          <a>⭐️</a>
          <a>⭐️</a>
          <a>⭐️</a>
          <a>⭐️</a>
        </div>
        </div>
        <p className='review'>12 reviews</p>
        </div>
  </div>
</div> 
</div>    
 </section>
    )
}