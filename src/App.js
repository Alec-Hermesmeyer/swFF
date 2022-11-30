
// import './App.css';
// import { Home } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Services, Gallery } from '../src/pages';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
const TRACKING_ID = "UA-250494401-1"
ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />}>Home</Route>
          <Route exact path='/about' element={<About />}>About</Route>
          <Route exact path='/contact' element={<Contact />}>Contact</Route>
          <Route exact path='/services' element={<Services />}>Services</Route>
          <Route exact path='/gallery' element={<Gallery />}>Gallery</Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
