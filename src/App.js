import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPhone} from '@fortawesome/free-solid-svg-icons'
import body1 from './styles/body1.css'
import './App.css';
import travel from '../src/img/travel.png'

function App() {
  return (
    <div className="App">
      <header className="header">
      <nav className='nav'>
            <a href= "home" className='logo nav-link'>HOLIDAYZ</a> 
        <ul className='nav-menu'>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        </style>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
          <li className='nav-menu-item'>
          <li><a href= "#home"className='nav-menu nav-link'>Home</a></li>          
          <li><a href= "#events" className='nav-menu nav-link'>Events</a></li>
          <li><a href= "#about" className='nav-menu nav-link'>About</a></li>
          <li><a href= "#blog" className='nav-menu nav-link v'>Blog</a></li>
          <li><a href= "#contact" className='nav-menu nav-link'> Contact</a></li>
          <li><a href= "#" className='nav-menu nav-link number'><FontAwesomeIcon icon={faPhone} className='phone'/> +1 (123) 456 7890 </a></li>
          </li>
        </ul>
      </nav>
      <div className='contenido'>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
      </style>
        <div className='titulo'>
        <spam className='titulo1'> A Whole World</spam>
        <span className='titulo2'> On A </span>
        <p className='"titulo3'>Sungle Island</p>
        </div>
        <div className='sub'>
        <spam className='sub1'>Let's begin your </spam>
        <span className='sub2'>adventure together, </span>
        <span className='sub3'>and your desire will become a </span>
        <span className='sub4'>REALITY...</span>
        </div>
        <li><a href= "#" className='boton1'>Discover a new location </a></li>
        <div className='travel'>
          <img src={travel}/>
        </div>
      </div>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
