import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './path/Home';
import About from './path/about';
import Reviews from './path/reviews';
import Booking from './path/Booking';
import Price from './path/price';
import Confirmbooking from './path/confirmbooking';

function App() {
  return (
    <>
    <Routes>
      <Route path= '/' index element = {<Home/>} />
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/prices' element={<Price/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/booking' element={<Booking/>} />
      <Route path='/confirmbooking' element={<Confirmbooking/>} />
    </Routes>
    </>
  );
}

export default App;
