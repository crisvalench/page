import { Navegacion } from './sections/0navegacion';
import {Home} from './sections/1home';
import {Events} from './sections/2events';
import {About} from './sections/3about';
import {Blog} from './sections/4blog';
import {Services} from './sections/5services';
import {Experience} from './sections/6experience';
import {Contact} from './sections/7contact';
// import travel from '../src/img/travel.png';

function App() {
  return (
    <div className="App">
      
      <header className="header">
      <Navegacion/>
      </header>

      <body>
      <Home/>
      <Events/>
      <About/>
      <Blog/>
      <Services/>
      <Experience/>   
      </body>

      <footer id='contact'>
        <Contact/>
      </footer>

    </div>
  );
}
export default App;
