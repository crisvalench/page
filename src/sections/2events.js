import React from "react";
import '../App.js';
import '../styles/body2.css';
import italy from '../img/italy.jpeg';
import indonesia from '../img/indonesia.webp';
import maldives from '../img/maldives.webp';

export  function Events(){
    return(
        <section className='contenido2' id='events'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
      </style>
       <div className='titulos'>
         <spam className='btitulo'>Have a look at our </spam>
         <spam className='bsub'> finest option</spam>
       </div>
       <div className='textos'>
         <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
       <div className='cards'>
       <div className='card'>
       <img className='img' src={italy}></img>
       <h4 className='pais'>Italy</h4>
      </div>
      <div className='card'>
       <img className='img' src={indonesia}></img>
       <h4 className='pais'> Indonesia</h4>
      </div>
      <div className='card'>
       <img className='img' src={maldives}></img>
       <h4 className='pais'>Maldives</h4>
      </div>
      </div>
      </section>
    )
}