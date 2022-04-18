import React from "react";
import '../App.js';
import '../styles/footer.css'

export function Contact (){
    return(
        <section className='contenido7'>
          <div className='primero'>
            <div className='cosa'><h6 className='cosa1'>HOLIDAYS</h6></div>
            <div className='cos'><p className='cosa2'> Domestic & International Tours</p></div>
          </div>
          <div className='t1xts'>
          <p className='t1xt'> Subcribe to get our Newsletter</p>
          </div>
          <div className='cajita'>
            <form>
              <input className='cajita1' type='email' placeholder='Your Email'/>
              <input  className='cajita2'type='submit' value='Subscribe'/>
            </form>
          </div>
          <div className='rr'>
            <a className='r e' href='#'>Careers</a>
            <a className='r e f' href='#'>Privacy Policy</a>
            <a className='r' >Terms & Conditions</a>  
          </div>
          <div className='cajita100'>
          <p className='texto100'>&copy; 2022 Tourism Department.</p>
          </div>
        </section>
    )
}