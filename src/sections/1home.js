import React from "react";
import '../App.js';
import '../styles/body1.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCirclePlay} from '@fortawesome/free-solid-svg-icons';


 export function Home(){
    return(
        <section className='contenido' id='home'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
      </style>
        <div className='tituloss'>
        <spam className='titulo1'> A Whole World</spam>
        <spam className='titulo2'> On A </spam>
        <p className='"titulo3'>Sungle Island</p>
        </div>
        <div className='sub'>
        <spam className='sub1'>Let's begin your </spam>
        <spam className='sub2'>adventure together, </spam>
        <spam className='sub3'>and your desire will become a </spam>
        <spam className='sub4'>REALITY...</spam>
        </div>
        {/* <p className='text'>hgfbiouodfjnbvsijfdnsi</p>
        <p className='text'>hgfbiouodfjnbvsijfdnsi</p>
        <p className='text'>hgfbiouodfjnbvsijfdnsi</p> */}
        <div className='nav2'>
        <a href= "#"className='boton1'>Discover a new location </a>
        <a href='https://www.youtube.com/watch?v=i8vy-DLwHNw' className='icono'><FontAwesomeIcon icon={faCirclePlay}/> 
        <spam className='tx1'> watch it's</spam><spam className='tx2'> operation</spam></a>
        {/* <spam className='tx1'>watch it's</spam><spam className='tx2'>operation</spam></li> */}
        </div>
        {/* corregir
        <div className='travel'>
          <img src={travel}/>
        </div> */}
      </section>
    )
}