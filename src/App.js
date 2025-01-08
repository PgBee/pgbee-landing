import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Work from './Components/Work';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useRef } from 'react';
import BeeSupport from './Components/BeeSupport';

function App() {
  const aboutRef = useRef(null)
  // useEffect(() => {
  //   aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [])

  return (
    <div className="App">
      <Navbar/>
      <div id="Home">
        <Home/>
      </div>
      <div ref={aboutRef} id='About'>
        <About/>
      </div>
      <div id='Work'>
          <Work/>
      </div>
      <Contacts/>
      <Footer/>
      <BeeSupport/>
    </div>
  );
}

export default App;
