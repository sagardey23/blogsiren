// import logo from './logo.svg';
import './App.css';
import './components.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { DataProvider } from './Components/AllContext'
import Header from './Components/Header';
import Bollywood from './Components/Bollywood';
import Home from './Components/Home';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import ArtReading from './Components/homeCompo/ArtReading';


function App() {
  return (
    <>
    <DataProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/bollywood" element={<Bollywood/>} />
        {/* <Route path='/PostDetails/:id' element={<PostDetails />}/> */}
        <Route path='/artReading/:id' element={<ArtReading/>}/>

        <Route path="/technology" element={<Technology/>} />
        <Route path="/hollywood" element={<Hollywood/>} />
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/food" element={<Food/>} />

      </Routes>
    </Router>
    </DataProvider>
    </>
  );
}

export default App;
