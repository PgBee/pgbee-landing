import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Work from './Components/Work';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
