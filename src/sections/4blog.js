import React from "react";
import '../App.js';
import '../styles/body4.css'

export function Blog(){
    return(
        <section className='contenido4' id='blog'>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
        </style>
         <div className='titu'>
           <spam className='btitu'>WATCH, </spam>
           <spam className='bsubti'> our lattest vlog</spam>
          </div>
          <div className='texts'>
            <div className='parrafo'>
            <p className='text2'> Lorem Ipsum is simply dummy text of the printing,
           standard dummy text ever since the 1500s, when an
           unknown printer took a galley of type and scrambled
           it to make a type specimen book. <spam><a  href='#' className='link'>Learn more</a></spam> </p>
           <div className='contenedor-video'>
            <iframe src="https://www.youtube.com/embed/n8mj-MG9hMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            </div>
        </section>
    )
}