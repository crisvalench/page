import React from "react";
import '../App.js';
import '../styles/body3.css'
import domes from '../img/domes.jpeg'
import inter from '../img/inter.jpeg'

export function About(){
    return(
        <section className='contenido3' id='about'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
      </style>
       <div className='titulo'>
         <spam className='btitul'>GLOBALLY </spam>
         <spam className='bsubt'> Accepted</spam>
       </div>
       <div className='txts'>
         <p className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       </div>
        
      <div className='contenedor'>
        <figure>
        <img className='domes' src={domes}></img>
        <div className='capa'>
        <h3> For Domestic</h3>
        <p> Start trip today</p>
        </div>
        </figure>

        <figure>
        <img className='inter' src={inter}></img>
        <div className='capa'>
        <h3> For International</h3>
        <p> Start trip today</p>
        </div>
        </figure>
        </div>
      </section>
    )
}