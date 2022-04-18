import React from "react";
import '../App.js';
import '../styles/body5.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faHotel,faGlobe,faTags} from '@fortawesome/free-solid-svg-icons';


export function Services(){
    return(<section className='contenido5' id='service'>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
    </style>
     <div className='tit'>
       <spam className='btit'>WHY, </spam>
       <spam className='bsubtil'> Choose Us</spam>
      </div>
      <div className='tx'>
        <p className='text5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='flex' >
          <div className='card1'>
          <FontAwesomeIcon icon={faHotel} className='card-body-img img1'/>
          <div className='textsub'>
          <h1 className='card-body-title'>Handpicked Hotels</h1>
          <p className='card-body-text'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
         </div>
          </div>
          <div className='card2'>
          <FontAwesomeIcon icon={faGlobe} className='card-body-img img2'/>
          <div className='textsub'>
          <h1 className='card-body-title'>World Class Service</h1>
          <p className='card-body-text'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
          </div>
          </div>
          <div className='card3'>
          <FontAwesomeIcon icon={faTags} className='card-body-img img3'/>
          <div className='textsub'>
          <h1 className='card-body-title'>Best Price Guarantee</h1>
          <p className='card-body-text'>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
          </div>
          </div>
          </div>
    </section>
    )
}
